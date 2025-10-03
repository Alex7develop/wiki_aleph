// import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
// import { awsConfig } from '../config/aws';

// const s3Client = new S3Client({
//     credentials: awsConfig.credentials,
//     region: awsConfig.region,
//     endpoint: awsConfig.endpoint,
//     forcePathStyle: awsConfig.forcePathStyle
// });

export interface S3Object {
  Key?: string;
  LastModified?: Date;
  Size?: number;
  ETag?: string;
}

// Тип одного файла из API
export interface FileItem {
  name: string; // Название файла
  path: string; // Путь к файлу в хранилище
  url: string; // Прямая ссылка на файл
}

/**
 * Получить список файлов с backend API
 * @returns Promise<FileItem[]> — массив файлов
 */
export const listObjects = async (): Promise<FileItem[]> => {
  try {
    // Запрос к backend API
    const res = await fetch('https://api.alephtrade.com/backend_wiki/api/list');
    const data = await res.json();
    // Проверяем статус и наличие массива файлов
    if (data.status && Array.isArray(data.files)) {
      return data.files;
    }
    return [];
  } catch (error) {
    console.error('Ошибка при получении файлов:', error);
    return [];
  }
};
