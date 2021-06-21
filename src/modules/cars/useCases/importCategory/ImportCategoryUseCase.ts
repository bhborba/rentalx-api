import csvParse from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
    async execute(file: any): Promise<void> {
        const { createReadStream, filename, path } = await file;
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

        parseFile.on('data', async line => {
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase };
