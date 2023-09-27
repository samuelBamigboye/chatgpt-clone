// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../../lib/chatgpt";


type Option = {
    value: string;
    label: string;
};

type Data = {
    modelOptions: Option[];
};

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const models = await openai.listModels().then((res: { data: { data: any; }; }) => res.data.data);

    const modelOptions = models.map((model: { id: any; }) => ({
        value: model.id,
        label: model.id,
    }));
    
    res.status(200).json({
        modelOptions,
    });
}