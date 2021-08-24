import { useState, useEffect } from "react";

import axios from "axios";

import { Container, Grid, Paper } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", flex: 0.3 },
  { field: "login", headerName: "Логин", flex: 0.7 }
];

const columnsStat = [
  { field: 'login', headerName: 'Логин', flex: 0.25 },
  { field: 'overall', headerName: 'Всего сыграно', flex: 0.25 },
  { field: 'wins', headerName: 'Побед', flex: 0.25 },
  { field: 'loses', headerName: 'Поражений', flex: 0.25 }
];

export default function Home() {
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  let [isStatLoading, setStatLoading] = useState(true);
  let [statData, setStatData] = useState([]);

  useEffect(() => {
    axios.get("/api/players").then((res) => {
      setData(res.data);
      setLoading(false);
    });
    axios.get('/api/players/stats').then((res) => {
      setStatData(res.data);
      setStatLoading(false);
    });
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <h1>Table tennis overview</h1>
        <Grid className="main-grid" container spacing={3}>
          <Grid className="main-grid__item" item xs={12} lg={6}>
            <Paper className="panel-item">
              <h2>Игроки</h2>
              <DataGrid
                pageSize={5}
                autoHeight
                columns={columns}
                rows={data}
                disableSelectionOnClick
                loading={isLoading}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className="panel-item">
            <h2>Cтатистика по каждому игроку</h2>
              <DataGrid
                pageSize={5}
                autoHeight
                columns={columnsStat}
                rows={statData}
                disableSelectionOnClick
                loading={isStatLoading}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="panel-item">
              <h2>3</h2>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="panel-item">
              <h2>4</h2>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="panel-item">
              <h2>5</h2>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
