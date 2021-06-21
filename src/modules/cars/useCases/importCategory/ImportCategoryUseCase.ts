import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async loadCategories(file: any): Promise<IImportCategory[]> {
        const { createReadStream, filename, path } = await file;
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const parseFile = csvParse();
            let stream = null;

            // Se veio de REST
            if (path) {
                console.log('entrou onde nao devia');
                stream = fs.createReadStream(file.path);
            } else {
                stream = createReadStream();

                stream.pipe(fs.createWriteStream(`./tmp/${filename}`));
            }

            stream.pipe(parseFile);

            parseFile
                .on('data', async line => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on('end', () => {
                    resolve(categories);
                })
                .on('error', err => {
                    reject(err);
                });
        });
    }
    async execute(file: any): Promise<void> {
        const categories = await this.loadCategories(file);
        console.log(categories);
    }
}

export { ImportCategoryUseCase };
