import Utilities from './utilities';
import { CharacterQuery } from './queries/queries/character/CharacterQuery';
import { CharacterSearchQuery } from './queries/queries/character/CharacterSearchQuery';
import { CharacterSearchResults } from './structures/character/CharacterSearchResults';
import { CharacterStructure } from './structures/character/CharacterStructure';
import { MediaQuery } from './queries/queries/media/MediaQuery';
import { MediaSearchQuery } from './queries/queries/media/MediaSearchQuery';
import { MediaSearchResults } from './structures/media/MediaSearchResults';
import { MediaStructure } from './structures/media/MediaStructure';
import { PageCharactersArgs, PageMediaArgs, PageStaffArgs, PageStudiosArgs, PageUsersArgs } from './types/types';
import { UserStructure } from './structures/user/UserStructure';
import { UserSearchResults } from './structures/user/UserSearchResults';
import { UserSearchQuery } from './queries/queries/user/UserSearchQuery';
import { UserQuery } from './queries/queries/user/UserQuery';
import { ViewerQuery } from './queries/queries/user/ViewerQuery';
import { ViewerStructure } from './structures/user/ViewerStructure';
import { StaffStructure } from './structures/staff/StaffStructure';
import { StaffSearchResults } from './structures/staff/StaffSearchResults';
import { StudioStructure } from './structures/studio/StudioStructure';
import { StudioSearchResults } from './structures/studio/StudioSearchResults';
import { StaffQuery } from './queries/queries/staff/StaffQuery';
import { StaffSearchQuery } from './queries/queries/staff/StaffSearchQuery';
import { StudioQuery } from './queries/queries/studio/StudioQuery';
import { StudioSearchQuery } from './queries/queries/studio/StudioSearchQuery';

/** The main anilist.js class. */
class Client {
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
		const json = await this.utilities.APIRequest(MediaQuery, { id }, this);
		return new MediaStructure(json, this);
	}

	/**
	 * Gets the media with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchMedia({ format: 'OVA', includedTags: ['Body Horror'] })
	 */
	async searchMedia(variables: PageMediaArgs) {
		const json = await this.utilities.APIRequest(MediaSearchQuery, variables, this);
		return new MediaSearchResults(json, this);
	}

	/**
	 * Gets the character with the matching ID.
	 * @param id character id
	 */
	async getCharacter(id: number) {
		const json = await this.utilities.APIRequest(CharacterQuery, { id }, this);
		return new CharacterStructure(json, this);
	}

	/**
	 * Gets the characters with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchCharacters({ name: 'Naruto' })
	 */
	async searchCharacters(variables: PageCharactersArgs) {
		const json = await this.utilities.APIRequest(CharacterSearchQuery, variables, this);
		return new CharacterSearchResults(json, this);		
	}
	
	/**
	 * Gets the currently authorized user.\
	 * This requires you to be logged in.
	 * @example
	 * .me().info.id
	 */
	async me() {
		const json = await this.utilities.APIRequest(ViewerQuery, {}, this);
		return new ViewerStructure(json, this);
	}

	/**
	 * Gets the character with the matching ID.
	 * @param id character id
	 */
	async getUser(id: number) {
		const json = await this.utilities.APIRequest(UserQuery, { id }, this);
		return new UserStructure(json, this);
	}

	/**
	 * Gets the characters with the maching variables.
	 * @param variables filter variables
	 * @example
	 * .searchCharacters({ name: 'Naruto' })
	 */
	async searchUsers(variables: PageUsersArgs) {
		const json = await this.utilities.APIRequest(UserSearchQuery, variables, this);
		return new UserSearchResults(json, this);		
	}
	
	/**
	 * Gets the staff with the matching ID.
	 * @param id staff id
	 */
	async getStaff(id: number) {
		const json = await this.utilities.APIRequest(StaffQuery, { id }, this);
		return new StaffStructure(json, this);
	}

	/**
	 * Gets the staff with the matching variables.
	 * @param variables filter variables
	 */
	async searchStaff(variables: PageStaffArgs) {
		const json = await this.utilities.APIRequest(StaffSearchQuery, variables, this);
		return new StaffSearchResults(json, this);
	}

	/**
	 * Gets the studio with the matching ID.
	 * @param id studio id
	 */
	async getStudio(id: number) {
		const json = await this.utilities.APIRequest(StudioQuery, { id }, this);
		return new StudioStructure(json, this);
	}

	/**
	 * Gets the studios with the matching variables.
	 * @param variables filter variables
	 */
	async searchStudios(variables: PageStudiosArgs) {
		const json = await this.utilities.APIRequest(StudioSearchQuery, variables, this);
		return new StudioSearchResults(json, this);
	}
}

export = Client;