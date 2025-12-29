import axiosInstance from "./axiosInstance";

class TournamentService {
  async create(credentials) {
    await axiosInstance.post("/tournaments", {
      name: credentials.name,
      description: credentials.description,
      format: credentials.format,
      date_end: credentials.endDate,
      date_start: credentials.startDate,
      prize: credentials.prize,
    });
  }

  async delete(id) {
    await axiosInstance.delete(`/tournaments/${id}`);
  }

  async getTournaments() {
    const resp = await axiosInstance.get("/tournaments");
    return resp.data
  }

  async getTournamentById(id) {
    const resp = await axiosInstance.get(`/tournaments/${id}`);
    return resp.data
  }
}

const tournamentService = new TournamentService();
export default tournamentService;