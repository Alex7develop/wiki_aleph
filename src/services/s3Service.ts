import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { awsConfig } from '../config/aws';

const s3Client = new S3Client({
    credentials: awsConfig.credentials,
    region: awsConfig.region,
    endpoint: awsConfig.endpoint,
    forcePathStyle: awsConfig.forcePathStyle
});

export interface S3Object {
    Key?: string;
    LastModified?: Date;
    Size?: number;
    ETag?: string;
}

export interface FileItem {
    name: string;
    path: string;
    url: string;
}

export const listObjects = async (): Promise<FileItem[]> => {
    try {
        const res = await fetch('https://backend.wiki.alephtrade.com/api/list');
        const data = await res.json();
        if (data.status && Array.isArray(data.files)) {
            return data.files;
        }
        return [];
    } catch (error) {
        console.error('Ошибка при получении файлов:', error);
        return [];
    }
}; 