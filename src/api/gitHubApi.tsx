
import config from '@/config';
import { resolveRequest } from '@/utils/requests';
import axios from "axios";

const { SERVER_API_URL } = config;

const reqGetBotState = async () => {
    return resolveRequest<any>(axios.get(`http://localhost:8001/api/v1/bot-trading/state`));
};

const reqGetPricesCandlesBatch = async ({
    pairNameList = ['BTC/USDT'],
    mainIntervalCandleCount = 1500,
    timeIntervalList = [EBinanceTimeIntervalUnit.Minute5],
    mainTimeInterval = EBinanceTimeIntervalUnit.Minute5,
}: {
    pairNameList?: string[];
    mainIntervalCandleCount?: number;
    timeIntervalList?: EBinanceTimeIntervalUnit[];
    mainTimeInterval?: EBinanceTimeIntervalUnit;
}) => {
    return resolveRequest<TPairCandlesDict>(
        axios.post(`${SERVER_API_URL}/market`, {
            pairNameList,
            mainIntervalCandleCount,
            timeIntervalList,
            mainTimeInterval,
        })
    );
};