import hr from "./hr";

// define message schema as master message schema
export type MessageSchema = typeof hr;

// define number format schema
export type NumberSchema = {
  currency: {
    style: "currency";
    currencyDisplay: "symbol";
    currency: string;
  };
};
