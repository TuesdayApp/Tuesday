import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Stage } from "../Model/Stage";
import { StageService } from "../Service/StageService";

@Service()
@Resolver()
export class StageResolver {
	constructor(private readonly stageSerivce: StageService) { }
	
	@Mutation(type => Int)
	async AddStageToWorkflow(
		@Arg("workflowId") workflowId: number,
		@Arg("stageId") stageId: number
	): Promise<number | undefined> {
		return (await this.stageSerivce.AddStageToWorkflow(workflowId, stageId)).affected;
	}

	@Mutation(type => Stage)
	async CreateStage(): Promise<Stage> {
		return this.stageSerivce.CreateStage();
	}
}