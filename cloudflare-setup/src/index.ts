export interface Env{

}

export default {
	async fetch(request: Request,env: Env, ctx: ExecutionContext): Promise<Response> {
		
			return Response.json({
				"message": "you sent some request"
			})
	},
} satisfies ExportedHandler<Env>;
