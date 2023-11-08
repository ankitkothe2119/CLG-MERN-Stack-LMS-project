import { Express } from "express";
import { BodyParser } from "body-parser";
import { Mongoose } from "mongoose";
import { Cors } from "cors";
import dotenv from "dotenv";
import { Multer } from "multer";
import { Helmet } from "helmet";
import { Morgan } from "morgan";
import { path } from "path";
import { fileURLToPath } from "url";

/* configrations */