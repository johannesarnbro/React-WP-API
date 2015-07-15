import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let projects = Immutable.fromJS({});

function addProjects(projectsArray) {
  projects = projectsArray.reduce((memo, project) => {
    const slug = project.get('slug');
    return memo.set(slug, project);
  }, projects);
}

function addProject(projectsArray) {
  const project = projectsArray.first();
  const slug = project.get('slug');
  projects = projects.set(slug, project);
}

const ProjectStore = mcFly.createStore({
  getAll: function () {
    return projects;
  },
  getProjectBySlug(slug) {
    return projects.get(slug);
  },
}, function (payload) {

  const _projects = projects;

  switch (payload.actionType) {

    case actionTypes.PROJECT_INDEX_FETCH_SUCCESS:
      addProjects(payload.data);
      break;

    case actionTypes.PROJECT_INDEX_FETCH_FAIL:
      break;

    case actionTypes.PROJECT_FETCH_SUCCESS:
      addProject(payload.data);
      break;

    default:
      return true;
  }

  if (_projects !== projects) {
    ProjectStore.emitChange();
  }

  return true;
});

export default ProjectStore;
