import api from '../axios-config'
import {throwIfError} from '../Helpers/throwCustomException';
import {IReportUpdate } from '../../Models/reportModels'

const updateReport = async (reportUpdate: IReportUpdate):Promise<boolean> => {
    const result = await api().put('/Report/', reportUpdate);

    throwIfError(result);

    return result.status === 200;
}

export default updateReport;