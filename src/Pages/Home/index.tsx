import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Stack,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { CardComponent, Header } from '../../Components';
import { characters } from '../../api/characters';
import { TypeCharacter } from './interface/character.interface';
import { themePalette } from '../../Config/theme.config';

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    setLoading(true);
    characters

      .getAll({ page })

      .then(response => {
        setCount(response.data.info.pages);

        setAllCharacters(response.data.results);
        setTimeout(() => setLoading(false), 500);
      })

      .catch(error => {
        console.log(error.message);
      });
  }, [page]);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Container sx={{ mt: 6 }} maxWidth="xl">
        <Header
          title="Rick & Morty"
          description="Characters"
          element={
            <Button variant="contained">
              {' '}
              Iniciar{' '}
            </Button>
          }
        />
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <div>
              {allCharacters?.length !== 0 ? (
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  sx={{ mt: 5, mb: 5 }}>
                  {allCharacters?.map(character => (
                    <Grid item xs={3}>
                      <CardComponent
                        key={character.id}
                        image={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                'No Data'
              )}
            </div>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Pagination count={count} page={page} onChange={handleChange} variant='outlined' color="primary" size='large' />
            </Box>
          </>
        )}
      </Container>
    </div>
  );
};
