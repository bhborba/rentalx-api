import { IResolvers } from 'graphql-tools';
import { GraphQLUpload } from 'graphql-upload';

import { importCategoryUseCase } from '.';
import { MutationImportCategoryArgs } from '../../../../graphql/generated';

export const ImportCategoryResolver: IResolvers = {
    GraphQLUpload,
    Mutation: {
        async importCategory(
            _: void,
            args: MutationImportCategoryArgs,
        ): Promise<boolean> {
            const { file } = args;
            importCategoryUseCase.execute(file);
            return true;
        },
    },
};
