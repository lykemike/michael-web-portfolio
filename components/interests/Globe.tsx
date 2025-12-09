"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldDataJson from "@/data/world.json";

// --- Types ---
type CountryProps = { name?: string };
type CountryFeature = Feature<Geometry, CountryProps>;
type WorldFC = FeatureCollection<Geometry, CountryProps>;

// If your world.json is valid GeoJSON, assert it once here:
const worldData = worldDataJson as WorldFC;

// Hoisted so it doesn't trigger react-hooks/exhaustive-deps
const VISITED_COUNTRIES: readonly string[] = [
  "Indonesia",
  "Singapore",
  "Vietnam",
  "Japan",
  "Papua New Guinea",
  "USA",
];

const GlobeComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapContainer = mapContainerRef.current;
    if (!mapContainer) return;

    // Clear any existing content
    d3.select(mapContainer).selectAll("*").remove();

    const width = mapContainer.clientWidth;
    const height = 500;
    const sensitivity = 75;

    // const is fine; we mutate internal state, not the binding
    const projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();

    const pathGenerator = d3.geoPath().projection(projection);

    const svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Globe background
    svg
      .append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    const map = svg.append("g");

    map
      .append("g")
      .attr("class", "countries")
      .selectAll<SVGPathElement, CountryFeature>("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: CountryFeature) => pathGenerator(d) ?? null)

      .attr("fill", (d) =>
        VISITED_COUNTRIES.includes(d.properties?.name ?? "")
          ? "#E63946"
          : "white"
      )
      .style("stroke", "black")
      .style("stroke-width", 0.3)
      .style("opacity", 0.8);

    // Animation timer
    const timer = d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg
        .selectAll<SVGPathElement, CountryFeature>("path")
        .attr("d", (d: CountryFeature) => pathGenerator(d) ?? null);
    }, 200);

    // Cleanup
    return () => {
      timer.stop();
      d3.select(mapContainer).selectAll("*").remove();
    };
  }, []); // safe: VISITED_COUNTRIES is module-level

  return (
    <div className="flex flex-col text-white justify-center items-center w-full h-full">
      <div className="w-full" ref={mapContainerRef} />
    </div>
  );
};

export default GlobeComponent;
