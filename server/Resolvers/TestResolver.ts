import { Query, Resolver, Int } from "type-graphql";

@Resolver()
export class TestResolver {
  @Query(type => Int)
  theMeaningOfLife(): number {
    return 42;
  }
}