import { ITaskFooter } from "./ITaskFooter";
import { ITaskHeader } from "./ITaskHeader";
import { ITaskDescription } from "./ITaskDescription";

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
