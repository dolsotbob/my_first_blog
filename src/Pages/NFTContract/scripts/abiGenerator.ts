// 이 코드 기능: ABI와 주소를 JSON 파일로 저장하는 기능 
// 이 코드 목적: 배포된 스마트 계약의 정보를 기반으로 abis/계약명.json 파일을 만들어서 프론트엔드에서 사용할 수 있도록 준비하는 것
import fs from 'fs';
import path from 'path';
import type * as ethers from 'ethers';

const base = path.resolve(__dirname, '..');  // 프로젝트 루트 기준 

// 저장할 대상 경로들 
const outputPaths = [
    'abis',  // 프로젝트 루트 기준: nft-contract/abis 
    '../nft-platform/src/utils',  // 프론트엔드 폴더
]

const makeFile = async (
    location: string,
    destination: string[], // 여러 경로 
    address: string | ethers.Addressable
) => {
    const jsonPath = path.join(base, location);
    console.log('✅ ABI JSON 읽는 경로:', jsonPath)

    const json = fs.readFileSync(jsonPath, { encoding: 'utf-8' });
    const output = makeData(json, address);

    destination.forEach((dest) => {
        const fullPath = path.join(base, dest);
        console.log('💾 ABI 파일 저장 경로:', fullPath);
        fs.writeFileSync(fullPath, output);
    });
};

const makeData = (json: string, address: string | ethers.Addressable) => {
    const abi = JSON.parse(json).abi;

    return JSON.stringify({
        abi: abi,
        address: address,
    }, null, 2);  // 보기 좋게 들여쓰기 
};

export const makeAbi = async (
    contract: string,
    address: string | ethers.Addressable
) => {
    const abiFilePath = `artifacts/contracts/${contract}.sol/${contract}.json`;
    const outputFileName = `${contract}.json`;

    const destinations = outputPaths.map((outputBase) =>
        path.join(outputBase, outputFileName)
    );

    await makeFile(abiFilePath, destinations, address);
};
