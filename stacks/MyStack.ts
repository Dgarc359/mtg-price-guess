import { aws_route53_targets ,aws_ec2, RemovalPolicy } from "aws-cdk-lib";
import { ARecord, HostedZone } from "aws-cdk-lib/aws-route53";
// import { Route53RecordTarget } from "aws-cdk-lib/aws-route53-targets";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { StackContext, Api, StaticSite } from "sst/constructs";
import * as path from 'path';
import * as url from 'url';
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

//@ts-ignore
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export function services({ stack, app }: StackContext) {
  // const api = new Api(stack, "api", {
  //   routes: {
  //     "GET /": "packages/functions/src/lambda.handler",
  //   },
  // });

  const rootDomain = "nameofthemist.com";
  const subDomain = "mtg";
  const hz = HostedZone.fromLookup(
    stack,
    app.logicalPrefixedName('hosted-zone'),
    { domainName: rootDomain }
  );
  
  // const frontendBucket = new Bucket(
  //   stack,
  //   app.logicalPrefixedName('frontend-bucket'),
  //   {
  //     bucketName: app.logicalPrefixedName('frontend-bucket'),
  //     autoDeleteObjects: true,
  //     removalPolicy: RemovalPolicy.DESTROY,
  //   }
  // )

  const certificate = new Certificate(stack, app.logicalPrefixedName('certificate'), {
    domainName: `${subDomain}.${rootDomain}`,
    certificateName: app.logicalPrefixedName('certificate')
    
    // hostedZone: hz,
    // region: "us-east-1",
    // subjectAlternativeNames: ["bar.domain.com"],
  });
  

  const frontendBucket = new BucketDeployment(
    stack,
    app.logicalPrefixedName('frontend-bucket-deployment'),
    {
      sources: [Source.asset(path.join(__dirname, 'frontend'))],
      destinationBucket: new Bucket(
        stack,
        app.logicalPrefixedName('frontend-bucket'),
        {
          autoDeleteObjects: true,
          removalPolicy: RemovalPolicy.DESTROY,
        }
      )
    }
  )


  const site = new StaticSite(
    stack,
    app.logicalPrefixedName('frontend'),
    {
      path: "frontend",
      customDomain: {
        domainName: `${subDomain}.${rootDomain}`,
        // domainAlias: `www.${rootDomain}`,
        hostedZone: hz.zoneName
      },
      cdk: {
        bucket: frontendBucket.deployedBucket
      },
      buildOutput: 'dist'
    }
  );



  stack.addOutputs({
    site: rootDomain,
  });
}
