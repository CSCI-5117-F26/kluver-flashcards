import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {db, EJSON} from '#lib/mongo.server.ts'

export const load: PageServerLoad = async ({ }) => {
	const decks = await db.collection("decks").find() //all decks
    
    return {decks:EJSON.serialize(await decks.toArray())}
};