import * as d3 from 'd3';
import * as $ from 'jquery';

import './index.html'; // Adds the index.html to the dependency tree for HMR
import './styles/app.scss';

const svg = d3.select('#d3').append('svg')
  .attr('width', 600)
  .attr('height', 450);
