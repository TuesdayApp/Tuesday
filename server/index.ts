import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import express from 'express';
import dotenv from 'dotenv';

import { TestResolver } from './Resolvers/TestResolver';
import { createConnection } from 'typeorm';
import { Card } from './Model/Card';
import { Stage } from './Model/Stage';
import { Workflow } from './Model/Workflow';

dotenv.config()

const app = express();

(async () => {
	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				TestResolver,
			]
		}),
		introspection: true,
		tracing: true
	})

	server.applyMiddleware({ app, path: '/api/graphql' });

	createConnection({
		type: 'postgres',
		host: 'localhost',
		port: 5433,
		username: 'postgres',
		password: 'test123',
		database: 'tuesday',
		entities: [
			Card,
			Stage,
			Workflow
		],
		synchronize: true,
		logging: true
	}).then(async connection => {
		/*
		let card = new Card();
		card.sample = "sample";
		await connection.manager.save(card);

		let stage = new Stage();
		stage.cards = [card];
		await connection.manager.save(stage);

		let workflow = new Workflow();
		workflow.stages = [stage];
		await connection.manager.save(workflow);

		//const workflow = await connection.getRepository(Workflow).findOne(4, { relations: ["stages", ""] });
		//console.log(workflow);*/
		app.listen(process.env.PORT, () => console.log(`Api service listening at http://localhost:${process.env.PORT} || http://localhost:${process.env.PORT}${server.graphqlPath}`))
	})
})()