export interface LoadConfigParams {
  cwd?: string;
  files?: string[];
  exts?: string[];
  stopDir?: string;
  throwError?: boolean;
  silent?: boolean;
  packageKey?: string;
  processEnvKey?: string;
}
