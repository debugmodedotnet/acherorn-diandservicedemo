import { InjectionToken } from "@angular/core";
import {  IConfigEntity } from "./config.entity";




export const configToken = new InjectionToken<IConfigEntity>("this is token for IConfig entity");