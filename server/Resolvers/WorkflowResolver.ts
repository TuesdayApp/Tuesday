import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Workflow } from "../Model/Workflow";
import { WorkflowService } from "../Service/WorkflowService";

@Service()
@Resolver()
export class WorkflowResolver {

	constructor(
		private readonly workflowService: WorkflowService
	) {}

	@Query(type => Workflow)
	async GetWorkflow(
		@Arg("id") id: number
	): Promise<Workflow> {
		return this.workflowService.GetWorkflowById(id);
	}

	@Mutation(type => Workflow)
	async CreateWorkflow(): Promise<Workflow> {
		return this.workflowService.CreateWorkflow();
	}
}