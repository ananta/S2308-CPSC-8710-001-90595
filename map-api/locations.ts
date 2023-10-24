import { LatLngExpression } from "leaflet";

export const ClemsonLocation: LatLngExpression = [34.6838123, -82.8370369];

export type GuessLocation = {
  pictureUrl: string;
  imgProvider?: string;
  location: LatLngExpression;
};

const { clemsonPhotographyClub, google } = {
  google: "Google Maps",
  clemsonPhotographyClub: "Clemson Photography Club"
};

export const GuessLocationList: GuessLocation[] = [
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/1.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/2.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/3.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/4.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/5.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/6.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/7.jpg"
  },
  {
    imgProvider: google,
    location: [34.6838123, -82.8370369],
    pictureUrl: "/8.jpg"
  }
];
