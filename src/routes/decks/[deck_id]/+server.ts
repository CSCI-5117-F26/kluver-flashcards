import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {db, EJSON} from '#lib/mongo.server.ts'

export const PATCH: RequestHandler = async ({request, params}) => {
    const { deck_id } = params
    const { name } = await request.json();
    const bson_id = EJSON.deserialize({$oid:deck_id})
    const result = await db.collection("decks").updateOne({_id:bson_id}, {
            $set: { 'name': name },
    }) //all decks
    return new Response(EJSON.serialize(result));
};