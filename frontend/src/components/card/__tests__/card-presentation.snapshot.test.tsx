// import type * as Render from 'react-test-renderer'
// const {TestRenderer} = jest.requireActual<typeof Render>('react-test-renderer');
// import TestRenderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import {CardView} from '../card-presentation';
import { Card } from '../../../lib/types';
import {test, expect} from 'vitest';

    test("tests snapshot", () => {
        const cardData: Card = {
            name: "test card",
            image_uris: {
                png: "png url",
                art_crop: "art_crop url"
            },
            oracle_text: "fake oracle text",
            prices: {
                usd: "100",
                usdFoil: "100",
            },
            legalities: {
                modern: "legal",
            },
            set_name: "fake set name"
        }
        // const card = TestRenderoer
        const card = renderer
            .create(<CardView cardData={cardData}/>)
            .toJSON();
        expect(card).toMatchSnapshot();
    })
