"use client";
import { FC, useEffect, useRef, useState } from "react";
import { Hero } from "../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import useIntersection from "../hooks/useIntersection";
import Link from "next/link";
import fetchPeople from "../api/fetchPeople";

const HeroesTable: FC<{ heroes: Array<Hero>; next: string }> = ({
  heroes,
  next,
}) => {
  const [heroesState, setHeroesState] = useState(heroes);
  const [nextState, setNextState] = useState(next);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  useEffect(() => {
    if (!intersection?.isIntersecting || !nextState) {
      return;
    }
    const launch = async () => {
      const response = await fetchPeople(nextState);
      setHeroesState((prev) => [...prev, ...response.results]);
      setNextState(response.next);
    };
    launch();
  }, [intersection, nextState]);
  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Birth</TableHead>
            <TableHead>Look</TableHead>
            <TableHead>Home</TableHead>
            <TableHead>Films</TableHead>
            <TableHead>Ships</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {heroesState.map(
            ({
              name,
              id,
              birth_year,
              eye_color,
              hair_color,
              skin_color,
              height,
              mass,
              films,
              starships,
            }) => (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/${id}`}>{name}</Link>
                </TableCell>
                <TableCell>{birth_year !== "unknown" && birth_year}</TableCell>
                <TableCell className="hero-appearance">
                  <div>
                    <span>eyes:</span> {eye_color}
                  </div>
                  <div>
                    <span>hair:</span> {hair_color}
                  </div>
                  <div>
                    <span>skin:</span> {skin_color}
                  </div>
                </TableCell>
                <TableCell>
                  {height !== "unknown" && <div>{height}cm</div>}
                  {mass !== "unknown" && <div>{mass}kg</div>}
                </TableCell>
                <TableCell>{films.length}</TableCell>
                <TableCell>{starships.length}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      {nextState && (
        <div
          ref={intersectionRef}
          className="flex items-center justify-center p-5 w-full"
        >
          Loading more items...
        </div>
      )}
    </div>
  );
};

export default HeroesTable;
