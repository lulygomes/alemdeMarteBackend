import api from "../config/api";

interface ResponseData {
  id: number;
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
  };
}

class GetRecentPhotoService {
  public async execute(): Promise<ResponseData> {
    const response = await api.get("/");

    return response.data;
  }
}

export default GetRecentPhotoService;
