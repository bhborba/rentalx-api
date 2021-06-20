import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        const category = this.createCategoryUseCase.execute({
            name,
            description,
        });

        return response.json(category);
    }
}

export { CreateCategoryController };
