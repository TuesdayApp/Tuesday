import { Service } from "typedi";
import { Connection, UpdateResult } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import { Card } from "../Model/Card";

@Service()
export class CardService { 
	constructor(@InjectConnection() private readonly connection: Connection) { }
	
	async CreateCard(): Promise<Card> {
		return this.connection.getRepository(Card).save({
			sample: "Text"
		});
	}

	async AddCardToStage(stageId: number, cardId: number): Promise<UpdateResult> {
		return this.connection.getRepository(Card).update({
			id: cardId
		}, {	
			stage: {
				id: stageId
			}
		})
	}
}