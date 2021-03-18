import { Service } from "typedi";
import { Connection } from "typeorm";
import { InjectConnection } from "typeorm-typedi-extensions";
import { Stage } from "../Model/Stage";
import { Workflow } from "../Model/Workflow";

@Service()
export class WorkflowService {
	constructor(@InjectConnection() private readonly connection: Connection) {}

	GetWorkflowById(id: number): Promise<Workflow> {
		return this.connection.getRepository(Workflow).findOneOrFail(id, { relations: ["stages", "stages.cards"]});
	}

	CreateWorkflow(): Promise<Workflow> {
		return this.connection.getRepository(Workflow).save({
			stages: []
		});
	}
}