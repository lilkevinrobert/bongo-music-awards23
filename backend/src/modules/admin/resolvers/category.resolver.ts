import {Resolver} from "@nestjs/graphql";

@Resolver(()=> CategoryResolver)
export class CategoryResolver{

    constructor() {
    }

}