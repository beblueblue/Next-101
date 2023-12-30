type ClientProjectsParams = {
  id: string;
};

type SelectedClientProject = ClientProjectsParams & {
  clientProjectId: string;
};

export type { ClientProjectsParams, SelectedClientProject };
