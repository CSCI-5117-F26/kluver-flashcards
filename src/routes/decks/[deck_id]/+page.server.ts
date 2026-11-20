import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {db, EJSON} from '#lib/mongo.server.ts'

export const load: PageServerLoad = async ({ params }) => {
    try {
        const { deck_id } = params
        const bson_id = EJSON.deserialize({$oid:deck_id})
        const deck = await db.collection("decks").findOne({_id:bson_id}) //all decks
        if (deck) {
            return {deck:EJSON.serialize(deck)}
        } else {
            error(404, 'Not found');
        }
    } catch {
        error(404, 'Not found');
    }
};