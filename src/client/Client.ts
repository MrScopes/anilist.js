import Utilities from './utilities';
import * as Queries from '../queries/queries';
import { PageCharactersArgs, PageMediaArgs, PageStaffArgs, PageStudiosArgs, PageUsersArgs } from '../types/types';

import { CharacterSearchResults } from '../structures/character/CharacterSearchResults';
import { CharacterStructure } from '../structures/character/CharacterStructure';
import { MediaSearchResults } from '../structures/media/MediaSearchResults';
import { MediaStructure } from '../structures/media/MediaStructure';
import { UserStructure } from '../structures/user/UserStructure';
import { UserSearchResults } from '../structures/user/UserSearchResults';
import { ViewerStructure } from '../structures/user/ViewerStructure';
import { StaffStructure } from '../structures/staff/StaffStructure';
import { StaffSearchResults } from '../structures/staff/StaffSearchResults';
import { StudioStructure } from '../structures/studio/StudioStructure';
import { StudioSearchResults } from '../structures/studio/StudioSearchResults';

/** The main anilist.js class. */
export class Client {
    token?: string;
    utilities: Utilities;

	/**
	 * "Logs in" to AniList. Required for some features.
	 * @param token API token
	 */
	constructor(token?: string) {
        this.utilities = new Utilities();
        this.token = token;
	}

	/**
	 * Gets the media with the matching ID.
	 * @param id media id
	 */
	async getMedia(id: number) {
		const json = await this.utilities.APIRequest(Queries.MediaQuery, { id }, this);
		return new MediaStructure(json, this);
	}

	/**
	 * Gets the media with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchMedia({ format: 'OVA', includedTags: ['Body Horror'] })
	 */
	async searchMedia(variables: PageMediaArgs) {
		const json = await this.utilities.APIRequest(Queries.MediaSearchQuery, variables, this);
		return new MediaSearchResults(json, this);
	}

	/**
	 * Gets the character with the matching ID.
	 * @param id character id
	 */
	async getCharacter(id: number) {
		const json = await this.utilities.APIRequest(Queries.CharacterQuery, { id }, this);
		return new CharacterStructure(json, this);
	}

	/**
	 * Gets the characters with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchCharacters({ name: 'Naruto' })
	 */
	async searchCharacters(variables: PageCharactersArgs) {
		const json = await this.utilities.APIRequest(Queries.CharacterSearchQuery, variables, this);
		return new CharacterSearchResults(json, this);		
	}
	
	/**
	 * Gets the currently authorized user.\
	 * This requires you to be logged in.
	 * @example
	 * .me().info.id
	 */
	async me() {
		const json = await this.utilities.APIRequest(Queries.ViewerQuery, {}, this);
		return new ViewerStructure(json, this);
	}

	/**
	 * Gets the character with the matching ID.
	 * @param id character id
	 */
	async getUser(id: number) {
		const json = await this.utilities.APIRequest(Queries.UserQuery, { id }, this);
		return new UserStructure(json, this);
	}

	/**
	 * Gets the characters with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchCharacters({ name: 'Naruto' })
	 */
	async searchUsers(variables: PageUsersArgs) {
		const json = await this.utilities.APIRequest(Queries.UserSearchQuery, variables, this);
		return new UserSearchResults(json, this);		
	}
	
	/**
	 * Gets the staff with the matching ID.
	 * @param id staff id
	 */
	async getStaff(id: number) {
		const json = await this.utilities.APIRequest(Queries.StaffQuery, { id }, this);
		return new StaffStructure(json, this);
	}

	/**
	 * Gets the staff with the matching variables.
	 * @param variables filter variables
	 */
	async searchStaff(variables: PageStaffArgs) {
		const json = await this.utilities.APIRequest(Queries.StaffSearchQuery, variables, this);
		return new StaffSearchResults(json, this);
	}

	/**
	 * Gets the studio with the matching ID.
	 * @param id studio id
	 */
	async getStudio(id: number) {
		const json = await this.utilities.APIRequest(Queries.StudioQuery, { id }, this);
		return new StudioStructure(json, this);
	}

	/**
	 * Gets the studios with the matching variables.
	 * @param variables filter variables
	 */
	async searchStudios(variables: PageStudiosArgs) {
		const json = await this.utilities.APIRequest(Queries.StudioSearchQuery, variables, this);
		return new StudioSearchResults(json, this);
	}
}