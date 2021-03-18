import { Service } from "typedi";
import { Connection, UpdateResult } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import { Stage } from "../Model/Stage";

@Service()
export class StageService {
	constructor(@InjectConnection() private readonly connection: Connection) { }
	
	async AddStageToWorkflow(workflowId: number, stage: number): Promise<UpdateResult> {
		return this.connection.getRepository(Stage).update({
			id: stage
		}, {
			workflow: {
				id: workflowId
			}
		});
	}

	async CreateStage(): Promise<Stage> {
		return this.connection.getRepository(Stage).save({});
	}
}