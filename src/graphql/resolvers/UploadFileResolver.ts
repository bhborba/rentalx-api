import { IResolvers } from 'graphql-tools';
import { GraphQLUpload } from 'graphql-upload';

import { MutationUploadFileArgs } from '../generated';

export const UploadFIleResolver: IResolvers = {
    GraphQLUpload,
    Mutation: {
        async uploadFile(
            _: void,
            args: MutationUploadFileArgs,
        ): Promise<boolean> {
            const { file } = args;
            const { filename, mimetype, createReadStream } = await file;
            console.log(filename);
            console.log(mimetype);
            return true;
        },
    },
};
