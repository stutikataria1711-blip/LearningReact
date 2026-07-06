// CHRONOS STUDY PLANNER APPLICATION LOGIC

// Default CSV Data Embedded
const DEFAULT_CSV_DATA = `Day,Date,Day of Week,Technology,Topic / Learning Objective,8-Hour Daily Breakdown Split
Day 01,07/07/2026,Tuesday,JavaScript,"Introduction, Variables, Data Types & Operators","2h: MDN Docs, JS Engine basics, let/const vs var | 3h: Writing basic scripts, experimenting with arithmetic/logical operators | 2h: Create a terminal-based simple calculator | 1h: Code review, debugging scope errors"
Day 02,08/07/2026,Wednesday,JavaScript,"Control Flow, Loops, and Basic Functions","2h: If/Else, Switch, For/While loops, Function declarations | 3h: Writing loop challenges (fizzbuzz, prime numbers) | 2h: Build a number guessing game in the console | 1h: Log errors and practice using console.table()"
Day 03,09/07/2026,Thursday,JavaScript,"Functions Deep Dive: Scope, Hoisting & Closures","2h: Execution context, lexical scope, closures, hoisting mechanics | 3h: Testing scope leakage, building counter functions using closures | 2h: Design a secure bank-account simulator function with private variables | 1h: Walkthrough memory allocation behavior"
Day 04,10/07/2026,Friday,JavaScript,"Objects, Arrays & Advanced Methods","2h: Array methods (map, filter, reduce), Object manipulation, keys/values | 3h: Chaining map and filter on mock user datasets | 2h: Build a complex data-filtering script for a mock e-commerce item list | 1h: Optimize code for readability and performance"
Day 05,13/07/2026,Monday,JavaScript,DOM Manipulation & Event Listeners,"2h: Selecting elements, manipulating classes/styles, Event bubbling/capturing | 3h: Building interactive UI elements (modals, dropdowns) from scratch | 2h: Build a dynamic interactive checklist or tabbed component | 1h: Debug event listener leaks"
Day 06,14/07/2026,Tuesday,JavaScript,Asynchronous JS: Callbacks & Promises,"2h: Callbacks, callback hell, Promise syntax (.then, .catch, .finally) | 3h: Creating custom Promises, converting old callbacks into Promises | 2h: Build a mock database-fetching utility mimicking server delays | 1h: Review microtasks vs macrotasks queues"
Day 07,15/07/2026,Wednesday,JavaScript,Asynchronous JS: Async/Await & APIs,"2h: Async/Await syntax, handling errors with try/catch, Fetch API | 3h: Interfacing with public APIs (JSONPlaceholder, GitHub API) | 2h: Create a fully operational dynamic Weather Dashboard querying a real weather API | 1h: Optimize error handling for offline status"
Day 08,16/07/2026,Thursday,JavaScript,ES6+ Modern Features & Modules,"2h: Destructuring, Rest/Spread, Arrow Functions, Template Literals, ES Modules | 3h: Refactoring legacy JS files into modern ES6 modular syntax | 2h: Rebuild a clean modular utility package for math and string operations | 1h: Clean up project directory structures"
Day 09,17/07/2026,Friday,JavaScript,Object-Oriented JS: Classes & Prototypes,"2h: Prototypes, Prototype chain, Class syntax, constructors, 'this' keyword bind/call/apply | 3h: Building inheritance structures (Parent/Child classes) | 2h: Build an RPG text-based game system with character classes and statistics | 1h: Test instances and fix context alignment"
Day 10,28/07/2026,Tuesday,JavaScript,Browser Storage & Cookies,"2h: LocalStorage, SessionStorage, Cookie security settings, JSON stringify/parse | 3h: Storing user preferences and saving deep state objects | 2h: Build a multi-theme settings panel (Dark/Light mode) that persists across reloads | 1h: Inspect application storage in dev tools"
Day 11,29/07/2026,Wednesday,JavaScript,Advanced Concepts & Performance,"2h: Event Loop, Event Delegation, Currying, Debouncing/Throttling theory | 3h: Implementing custom debounce algorithms for window resizing or searches | 2h: Create a real-time instant search box filter using debounced API requests | 1h: Run performance audits using Lighthouse"
Day 12,30/07/2026,Thursday,JavaScript,Vanilla JS Capstone Project,"2h: Project architecture layout and feature planning (Advanced Task/Project Manager) | 3h: Coding core CRUD features, custom drag-and-drop or tag sorting without libraries | 2h: Finalizing UI details and adding strict input validation | 1h: Refactor code, push to GitHub, prepare repository documentation"
Day 13,31/07/2026,Friday,React.js,"Intro to React, Vite Setup, & JSX","2h: Vite compilation, Virtual DOM concept, JSX rules, Component structures | 3h: Setting up a professional directory layout, rendering dynamic expressions | 2h: Build a personal portfolio static landing page split into 5+ structured components | 1h: Clean up default Vite boilerplate code"
Day 14,03/08/2026,Monday,React.js,Props and State Management,"2h: Passing Props, children props, useState Hook, handling re-renders | 3h: Building state-driven elements (counters, text toggles, accordions) | 2h: Build a dynamic profile card editor where updates render instantly | 1h: Analyze component re-render triggers using React DevTools"
Day 15,04/08/2026,Tuesday,React.js,Conditional Rendering & Lists/Keys,"2h: Ternary operators, short-circuit evaluation, array mapping to JSX, key prop logic | 3h: Rendering lists of complex products, filtering elements using buttons | 2h: Build a searchable, category-filtered product list UI | 1h: Resolve missing unique key warnings in console"
Day 16,05/08/2026,Wednesday,React.js,Handling Events & Controlled Forms,"2h: Synthetic event system, controlled vs uncontrolled inputs, multi-input forms | 3h: Coding a form handler with validation states for emails and passwords | 2h: Create a full user registration wizard form with multi-step progression | 1h: Handle edge-case invalid form submissions smoothly"
Day 17,06/08/2026,Thursday,React.js,Component Lifecycle & useEffect,"2h: Side effects, dependency array configurations, clean-up operations | 3h: Synchronizing components with intervals, window events, or API calls | 2h: Build a real-time cryptocurrency price tracker widget pulling data every 30 seconds | 1h: Ensure clean-up functions prevent memory leaks"
Day 18,07/08/2026,Friday,React.js,Advanced Hooks: useRef & Performance,"2h: useRef for DOM nodes, persistent values across renders, useMemo/useCallback basics | 3h: Programming focus handling, timers, and calculating costly operations | 2h: Build an interactive custom video player with pause/play/skip buttons powered by refs | 1h: Test component performance gains"
Day 19,10/08/2026,Monday,React.js,State Management: Context API,"2h: Prop drilling issues, createContext, useContext Provider pattern, performance caveats | 3h: Wiring up a global theme or global authentication state configuration | 2h: Build a functional multilingual app toggle using Context for language dictionary states | 1h: Track global context updates inside components"
Day 20,11/08/2026,Tuesday,React.js,Single Page Apps: React Router,"2h: BrowserRouter, Routes, Route, Link, useParams, useNavigate, Nested routes | 3h: Configuring nav bars, active links, route guarding, dynamic item detail fetches | 2h: Build a Multi-Page Blog Platform featuring dynamic post ids and archive layouts | 1h: Create a clean custom 404 error landing page fallback"
Day 21,12/08/2026,Wednesday,React.js,Styling in React: Modern Approaches,"2h: CSS Modules, Tailwind CSS configuration, Tailwind classes utility framework | 3h: Integrating Tailwind CSS into existing components, implementing responsive design | 2h: Build a modern dashboard UI component layout featuring clean sidebar charts and grids | 1h: Audit UI layouts for mobile styling breakpoints"
Day 22,13/08/2026,Thursday,React.js,Custom Hooks & Code Reusability,"2h: Extracting stateful logic, naming rules, custom fetching and form hooks | 3h: Building a generic useFetch hook and a custom useLocalStorage hook | 2h: Refactor previous API projects to utilize your custom useFetch and state hooks | 1h: Document custom hook parameters"
Day 23,14/08/2026,Friday,React.js,Optimization & Production Testing,"2h: Code-splitting with React.lazy/Suspense, Error Boundaries, building production assets | 3h: Wrapping components in Error Boundaries, profiling file bundle sizes | 2h: Implement a lazy-loaded image gallery grid with skeleton loaders | 1h: Run a production build command and analyze dist directory"
Day 24,17/08/2026,Monday,React.js,React Core Project,"2h: Architecture blueprinting for an E-commerce Cart Engine application | 3h: Creating products catalog, item detail views, persistent cart list logic | 2h: Fine-tuning interactive items add/remove/checkout summary workflows | 1h: Full code styling refactor and comprehensive documentation"
Day 25,18/08/2026,Tuesday,Redux,Redux Architecture Fundamentals,"2h: Global Store, Actions, Reducers, Unidirectional data flow architecture principles | 3h: Drawing architecture maps, building pure functional data reducers manually | 2h: Mock a raw JavaScript state ledger system tracking actions and mutations | 1h: Verify state immutability patterns"
Day 26,19/08/2026,Wednesday,Redux,Modern Redux: Redux Toolkit (RTK),"2h: configureStore(), createSlice(), modern immutable updates via Immer library | 3h: Setting up the global Redux store inside an app, defining state slices | 2h: Build a highly responsive notification system toggle and state slice | 1h: Debug store configurations"
Day 27,20/08/2026,Thursday,Redux,Connecting Redux: Hooks Integration,"2h: Provider setup, useSelector hook for state extraction, useDispatch for updates | 3h: Swapping local component states with Redux global slices across multiple components | 2h: Build a user bookmark manager where any component can save items globally | 1h: Map app actions using Redux DevTools extension"
Day 28,21/08/2026,Friday,Redux,Asynchronous Redux: createAsyncThunk,"2h: Middleware architecture concepts, Thunk life cycles, pending/fulfilled/rejected slices | 3h: Wiring up real API calls to dispatching states inside an async thunk slice | 2h: Build an interactive Movie Search database UI backed by async thunk data states | 1h: Resolve asynchronous data racing conditions gracefully"
Day 29,24/08/2026,Monday,Redux,Advanced RTK: Introduction to RTK Query,"2h: RTK Query endpoints, auto-caching, auto-fetching, mutation definitions | 3h: Creating apiSlice frameworks, utilizing generated hooks (useGetPokemonQuery) | 2h: Refactor a previous API-heavy data table with automated background caching | 1h: Review network reduction tabs in browser tools"
Day 30,25/08/2026,Tuesday,Redux,Capstone Project: The Ultimate Dashboard,"2h: Full application outline integration (React Router + Redux Toolkit + RTK Query) | 3h: Developing a deep collaborative project dashboard with global authentication, lists, and items | 2h: Final integration pass, polishing user interactions, caching behaviors, and styling details | 1h: Complete repository finalization and production deployment build tests"`;

// DEFAULT GLOBAL TAGS
const DEFAULT_TAGS = [
  { name: 'Basics', color: '#10b981' },
  { name: 'Intermediate', color: '#3b82f6' },
  { name: 'Advanced', color: '#a855f7' },
  { name: 'Theory', color: '#6366f1' },
  { name: 'Coding Challenge', color: '#ec4899' },
  { name: 'Mini Project', color: '#06b6d4' },
  { name: 'Capstone Project', color: '#ef4444' },
  { name: 'API / Network', color: '#14b8a6' },
  { name: 'Asynchronous', color: '#f43f5e' },
  { name: 'Performance', color: '#84cc16' }
];

// DAY 1 CODING QUESTIONS FALLBACK
function getDay1Questions() {
  return [
    "Filter & Map: Given an array of users with name and age, filter out users under 18 and return an array of their names capitalized.",
    "Reduce Aggregation: Given an array of transactions with category and amount, sum up the total amount spent per category using Array.prototype.reduce().",
    "Flattener: Write a custom function to flatten an array of nested arrays of arbitrary depth (without using Array.prototype.flat()).",
    "Frequency Counter: Given a string, return an object mapping each character to its occurrence frequency.",
    "Group By Property: Write a function groupBy(array, key) that takes an array of objects and returns an object grouping them by the specified key.",
    "Object Key Remapper: Write a function that takes an object and a key-mapping configuration, returning a new object with the keys renamed accordingly.",
    "Find Duplicate Count: Given an array, find all elements that occur more than once and return them with their counts.",
    "Chained Manipulation: Given an e-commerce inventory array, chain operations to extract items in 'Electronics' category with price > $500, applying a 10% discount.",
    "Difference Finder: Write a function that returns the difference of two arrays (elements in array A that are not in array B).",
    "Deep Clone: Implement a basic deep cloning function deepClone(obj) that copies nested objects and arrays without referencing the original structures."
  ];
}

// STATE MANAGEMENT
let plannerState = {
  days: [],
  tags: [],
  filters: {
    search: '',
    tech: 'all',
    status: 'all',
    tag: 'all'
  },
  viewMode: 'grid' // 'grid' or 'table'
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  setupEventListeners();
});

function initApp() {
  // Load view mode preference
  const savedViewMode = localStorage.getItem('chronos_view_mode');
  if (savedViewMode) {
    plannerState.viewMode = savedViewMode;
  }
  updateViewToggleState();

  // Load from local storage or populate default
  const savedState = localStorage.getItem('chronos_study_planner_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      plannerState.days = parsed.days || [];
      plannerState.tags = parsed.tags || [];

      // Auto-migrate if Day 1 is not the correct topic "Objects, Arrays" (index 3) and it is the 30-day plan
      syncDayNumbers();
      const activeDays = plannerState.days.filter(d => d.assigned);
      const day1 = activeDays.find(d => d.dayNum === 'Day 01');
      if (plannerState.days.length === 30 && (!day1 || !day1.topic.includes('Objects, Arrays'))) {
        const activeIndices = [3, 6, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        plannerState.days.forEach((day, index) => {
          day.assigned = activeIndices.includes(index);
        });
        saveStateToLocalStorage();
      }

      // Ensure Day 1 has questions set in state
      const targetDay = plannerState.days.find(d => d.originalIndex === 3);
      if (targetDay && (!targetDay.questions || targetDay.questions.length === 0)) {
        targetDay.questions = getDay1Questions();
        saveStateToLocalStorage();
      }
    } catch (e) {
      console.error('Failed to parse saved state from local storage. Reverting to default.', e);
      loadDefaultData();
    }
  } else {
    loadDefaultData();
  }

  // Set Theme
  const savedTheme = localStorage.getItem('chronos_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  // Sync index and numbers of active days
  syncDayNumbers();

  // Initial render
  populateFilterDropdowns();
  renderAnalytics();
  renderPlannerList();
  renderUnassignedBacklog();
}

// SYNC ACTIVE AND UNASSIGNED DAY NUMBERS
function syncDayNumbers() {
  // Sort all days chronologically by original index
  plannerState.days.sort((a, b) => a.originalIndex - b.originalIndex);

  let activeCount = 0;
  plannerState.days.forEach(day => {
    // Graceful backward compatibility check
    if (day.assigned === undefined) day.assigned = true;

    if (day.assigned) {
      activeCount++;
      day.dayNum = 'Day ' + String(activeCount).padStart(2, '0');
    } else {
      day.dayNum = day.originalDayNum;
    }
  });
}

// LOAD DEFAULT DATA & PARSE CSV
function loadDefaultData() {
  plannerState.tags = [...DEFAULT_TAGS];
  plannerState.days = parseCSV(DEFAULT_CSV_DATA);
  
  // Define active indices (exactly 22 days starting with Day 4 Objects & Arrays)
  const activeIndices = [3, 6, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
  
  plannerState.days.forEach((day, index) => {
    day.assigned = activeIndices.includes(index);
    if (index === 3) {
      day.questions = getDay1Questions();
    }
  });
  
  autoTagDays();
  saveStateToLocalStorage();
}

function saveStateToLocalStorage() {
  localStorage.setItem('chronos_study_planner_state', JSON.stringify({
    days: plannerState.days,
    tags: plannerState.tags
  }));
}

// ROBUST CSV PARSER (RFC 4180 COMPLIANT CHARACTER LOOP)
function parseCSV(csvText) {
  const result = [];
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0) return result;

  // Extract headers
  const headers = parseCSVLine(lines[0]);
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const rowValues = parseCSVLine(line);
    if (rowValues.length < 6) continue;

    // Mapping columns: Day, Date, Day of Week, Technology, Topic / Learning Objective, 8-Hour Daily Breakdown Split
    const dayObj = {
      id: `day-${rowValues[0].replace(/\s+/g, '-').toLowerCase()}`,
      originalIndex: i - 1,
      originalDayNum: rowValues[0].trim(),
      dayNum: rowValues[0].trim(),
      date: rowValues[1].trim(),
      dayOfWeek: rowValues[2].trim(),
      technology: rowValues[3].trim(),
      topic: rowValues[4].trim(),
      splits: parseBreakdownSplit(rowValues[5]),
      tags: [],
      status: 'todo', // default status
      notes: '',
      assigned: true, // default to active
      questions: [] // practice questions list
    };

    result.push(dayObj);
  }
  return result;
}

function parseCSVLine(text) {
  const values = [];
  let inQuotes = false;
  let currentValue = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === '"') {
      // Check if it is an escaped quote (double double quote)
      if (inQuotes && text[i + 1] === '"') {
        currentValue += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes; // toggle quote mode
      }
    } else if (char === ',' && !inQuotes) {
      values.push(currentValue);
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  values.push(currentValue);
  return values;
}

// PARSE SPLITS LIKE: "2h: MDN Docs, JS Engine basics | 3h: Writing scripts"
function parseBreakdownSplit(splitString) {
  if (!splitString) return [];
  
  // Splits are separated by " | "
  const rawSegments = splitString.split(/\s*\|\s*/);
  const splits = [];

  rawSegments.forEach(seg => {
    seg = seg.trim();
    if (!seg) return;

    // Match patterns like "2h: description" or "1.5h: description" or "2h - description" or "2 hours: description"
    const match = seg.match(/^(\d+(?:\.\d+)?)h?:\s*(.*)$/i) || seg.match(/^(\d+(?:\.\d+)?)\s*h(?:ours?)?\s*(?:-|:)\s*(.*)$/i);
    
    if (match) {
      splits.push({
        hours: parseFloat(match[1]),
        desc: match[2].trim()
      });
    } else {
      // Fallback for custom formatted split segments
      splits.push({
        hours: 0,
        desc: seg
      });
    }
  });

  return splits;
}

// AUTO-TAG ITEMS BASED ON CONTENT KEYWORDS
function autoTagDays() {
  plannerState.days.forEach(day => {
    const textToSearch = `${day.topic} ${day.technology} ${day.splits.map(s => s.desc).join(' ')}`.toLowerCase();
    const tagsApplied = new Set();

    if (day.technology.toLowerCase() === 'javascript') {
      if (textToSearch.includes('intro') || textToSearch.includes('variable') || textToSearch.includes('operator') || textToSearch.includes('control flow') || textToSearch.includes('loop')) {
        tagsApplied.add('Basics');
      }
      if (textToSearch.includes('closure') || textToSearch.includes('hoisting') || textToSearch.includes('scope') || textToSearch.includes('event loop') || textToSearch.includes('prototype')) {
        tagsApplied.add('Advanced');
      }
    }

    if (day.technology.toLowerCase() === 'react.js') {
      if (textToSearch.includes('intro') || textToSearch.includes('jsx') || textToSearch.includes('props') || textToSearch.includes('state')) {
        tagsApplied.add('Basics');
      }
      if (textToSearch.includes('custom hook') || textToSearch.includes('context') || textToSearch.includes('redux') || textToSearch.includes('lazy') || textToSearch.includes('suspense')) {
        tagsApplied.add('Advanced');
      }
    }

    if (day.technology.toLowerCase() === 'redux') {
      tagsApplied.add('Advanced');
    }

    // Keyword mappings
    if (textToSearch.includes('theory') || textToSearch.includes('concept') || textToSearch.includes('mechanics')) {
      tagsApplied.add('Theory');
    }
    if (textToSearch.includes('challenge') || textToSearch.includes('fizzbuzz') || textToSearch.includes('prime number')) {
      tagsApplied.add('Coding Challenge');
    }
    if (textToSearch.includes('build') || textToSearch.includes('game') || textToSearch.includes('calculator') || textToSearch.includes('dashboard') || textToSearch.includes('widget') || textToSearch.includes('player') || textToSearch.includes('panel') || textToSearch.includes('bookmarks')) {
      tagsApplied.add('Mini Project');
    }
    if (textToSearch.includes('capstone') || textToSearch.includes('core project') || textToSearch.includes('ultimate dashboard') || textToSearch.includes('cart engine')) {
      tagsApplied.add('Capstone Project');
    }
    if (textToSearch.includes('api') || textToSearch.includes('fetch') || textToSearch.includes('querying') || textToSearch.includes('network')) {
      tagsApplied.add('API / Network');
    }
    if (textToSearch.includes('async') || textToSearch.includes('promise') || textToSearch.includes('callback') || textToSearch.includes('thunk')) {
      tagsApplied.add('Asynchronous');
    }
    if (textToSearch.includes('performance') || textToSearch.includes('optimize') || textToSearch.includes('lighthouse') || textToSearch.includes('cache') || textToSearch.includes('debounce') || textToSearch.includes('throttle')) {
      tagsApplied.add('Performance');
    }

    // Default to Intermediate if no matches and not Javascript/React basics
    if (tagsApplied.size === 0) {
      tagsApplied.add('Intermediate');
    }

    day.tags = Array.from(tagsApplied);
  });
}

// RENDER ANALYTICS (ONLY ACTIVE DAYS)
function renderAnalytics() {
  const activeDays = plannerState.days.filter(d => d.assigned);
  const totalDays = activeDays.length;
  const completedDays = activeDays.filter(d => d.status === 'completed').length;
  const inProgressDays = activeDays.filter(d => d.status === 'in-progress').length;
  
  // Progress Ring
  const completionPercent = totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;
  
  const circle = document.getElementById('progress-circle-bar');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (completionPercent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  document.getElementById('progress-percent-text').innerText = `${completionPercent}%`;
  document.getElementById('completed-count').innerText = completedDays;
  document.getElementById('total-days-count').innerText = totalDays;
  document.getElementById('progress-linear-fill').style.width = `${completionPercent}%`;

  // Hours stats
  let totalHours = 0;
  let completedHours = 0;
  let remainingHours = 0;

  activeDays.forEach(day => {
    const dayHours = day.splits.reduce((acc, split) => acc + (split.hours || 0), 0);
    totalHours += dayHours;
    if (day.status === 'completed') {
      completedHours += dayHours;
    } else if (day.status === 'in-progress') {
      completedHours += Math.round(dayHours * 0.4); 
      remainingHours += Math.round(dayHours * 0.6);
    } else {
      remainingHours += dayHours;
    }
  });

  document.getElementById('total-hours').innerText = `${totalHours}h`;
  document.getElementById('completed-hours').innerText = `${completedHours}h`;
  document.getElementById('remaining-hours').innerText = `${remainingHours}h`;

  // Tech Distribution Progress List
  const techCounts = {};
  activeDays.forEach(day => {
    techCounts[day.technology] = (techCounts[day.technology] || 0) + 1;
  });

  const techDistList = document.getElementById('tech-distribution-list');
  techDistList.innerHTML = '';

  const sortedTech = Object.entries(techCounts).sort((a, b) => b[1] - a[1]);
  sortedTech.forEach(([techName, count]) => {
    const percentage = totalDays > 0 ? Math.round((count / totalDays) * 100) : 0;
    
    // Theme color matching
    let colorClass = 'other';
    let fillStyle = 'background-color: var(--text-muted);';
    if (techName.toLowerCase() === 'javascript') {
      colorClass = 'js';
      fillStyle = 'background-color: var(--js-color);';
    } else if (techName.toLowerCase() === 'react.js') {
      colorClass = 'react';
      fillStyle = 'background-color: var(--react-color);';
    } else if (techName.toLowerCase() === 'redux') {
      colorClass = 'redux';
      fillStyle = 'background-color: var(--redux-color);';
    }

    const techItem = document.createElement('div');
    techItem.className = 'tech-progress-item';
    techItem.innerHTML = `
      <div class="tech-label-row">
        <span class="tech-name">
          <span class="tech-dot ${colorClass}"></span>
          ${techName}
        </span>
        <span class="tech-percent">${count} days (${percentage}%)</span>
      </div>
      <div class="tech-bar-bg">
        <div class="tech-bar-fill" style="width: ${percentage}%; ${fillStyle}"></div>
      </div>
    `;
    techDistList.appendChild(techItem);
  });
}

// POPULATE FILTERS SELECT OPTIONS (ONLY FROM ACTIVE)
function populateFilterDropdowns() {
  const techSelect = document.getElementById('filter-tech');
  const tagSelect = document.getElementById('filter-tag');

  // Preserve selections
  const currentTechFilter = plannerState.filters.tech;
  const currentTagFilter = plannerState.filters.tag;

  // Clear except first option
  techSelect.innerHTML = '<option value="all">All Technologies</option>';
  tagSelect.innerHTML = '<option value="all">All Tags</option>';

  const activeDays = plannerState.days.filter(d => d.assigned);

  // Unique Technologies from active schedule
  const techs = Array.from(new Set(activeDays.map(d => d.technology)));
  techs.sort().forEach(tech => {
    const opt = document.createElement('option');
    opt.value = tech;
    opt.innerText = tech;
    if (tech === currentTechFilter) opt.selected = true;
    techSelect.appendChild(opt);
  });

  // Global tags list
  plannerState.tags.forEach(tag => {
    const opt = document.createElement('option');
    opt.value = tag.name;
    opt.innerText = tag.name;
    if (tag.name === currentTagFilter) opt.selected = true;
    tagSelect.appendChild(opt);
  });
}

// GET FILTERED DATA (ACTIVE ONLY)
function getFilteredDays() {
  const { search, tech, status, tag } = plannerState.filters;
  const activeDays = plannerState.days.filter(d => d.assigned);

  return activeDays.filter(day => {
    // Search filter
    const matchesSearch = !search || 
      day.topic.toLowerCase().includes(search.toLowerCase()) ||
      day.dayNum.toLowerCase().includes(search.toLowerCase()) ||
      day.technology.toLowerCase().includes(search.toLowerCase()) ||
      day.date.includes(search) ||
      day.dayOfWeek.toLowerCase().includes(search.toLowerCase());

    // Tech filter
    const matchesTech = tech === 'all' || day.technology === tech;

    // Status filter
    const matchesStatus = status === 'all' || day.status === status;

    // Tag filter
    const matchesTag = tag === 'all' || day.tags.includes(tag);

    return matchesSearch && matchesTech && matchesStatus && matchesTag;
  });
}

// RENDER ACTIVE CARDS AND TABLE
function renderPlannerList() {
  const filteredData = getFilteredDays();
  const emptyState = document.getElementById('empty-state');
  
  if (filteredData.length === 0) {
    document.getElementById('planner-grid').style.display = 'none';
    document.getElementById('planner-table-container').style.display = 'none';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';

  if (plannerState.viewMode === 'grid') {
    document.getElementById('planner-table-container').style.display = 'none';
    document.getElementById('planner-grid').style.display = 'grid';
    renderGridView(filteredData);
  } else {
    document.getElementById('planner-grid').style.display = 'none';
    document.getElementById('planner-table-container').style.display = 'block';
    renderTableView(filteredData);
  }
}

// GRID VIEW RENDER
function renderGridView(data) {
  const gridContainer = document.getElementById('planner-grid');
  gridContainer.innerHTML = '';

  data.forEach(day => {
    let techClass = 'tech-other';
    let pillClass = 'other';
    if (day.technology.toLowerCase() === 'javascript') {
      techClass = 'tech-js';
      pillClass = 'js';
    } else if (day.technology.toLowerCase() === 'react.js') {
      techClass = 'tech-react';
      pillClass = 'react';
    } else if (day.technology.toLowerCase() === 'redux') {
      techClass = 'tech-redux';
      pillClass = 'redux';
    }

    const tagsHTML = day.tags.map(tagName => {
      const tagObj = plannerState.tags.find(t => t.name === tagName);
      const color = tagObj ? tagObj.color : '#6b7280';
      const textColor = getContrastColor(color);
      return `<span class="tag-pill" style="background-color: ${color}; color: ${textColor}">${escapeHTML(tagName)}</span>`;
    }).join('');

    const splitsHTML = day.splits.map(split => `
      <div class="split-segment">
        <span class="split-hour-tag">${split.hours}h</span>
        <span class="split-desc">${escapeHTML(split.desc)}</span>
      </div>
    `).join('');

    const card = document.createElement('div');
    card.className = `study-card ${techClass}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="day-badge">${escapeHTML(day.dayNum)}</span>
        <span class="tech-pill ${pillClass}">${escapeHTML(day.technology)}</span>
      </div>
      <div class="card-date-row">
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <span>${escapeHTML(day.date)} (${escapeHTML(day.dayOfWeek)})</span>
      </div>
      <h4 class="card-title">${escapeHTML(day.topic)}</h4>
      <div class="card-splits">
        ${splitsHTML}
      </div>
      ${day.questions && day.questions.length > 0 ? `
        <div class="card-questions-container">
          <button type="button" class="btn btn-secondary btn-small btn-toggle-questions" style="width: 100%; margin-top: 6px; justify-content: space-between;">
            <span>Coding Practice (${day.questions.length})</span>
            <svg class="chevron-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="transition: transform var(--transition-fast) ease-in-out;"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <ol class="card-questions-list" style="display: none; padding-left: 20px; margin-top: 10px; font-size: 12px; color: var(--text-muted); line-height: 1.45; text-align: left;">
            ${day.questions.map(q => `<li style="margin-bottom: 6px;">${escapeHTML(q)}</li>`).join('')}
          </ol>
        </div>
      ` : ''}
      <div class="card-tags">
        ${tagsHTML}
      </div>
      <div class="card-footer">
        <span class="status-badge ${day.status}">${day.status.replace('-', ' ')}</span>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-secondary btn-small btn-edit-day" data-id="${day.id}">
            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg>
            Edit
          </button>
          <button class="btn btn-unassign-active btn-small" data-id="${day.id}" title="Move to Backlog">
            Unassign
          </button>
        </div>
      </div>
    `;

    card.querySelector('.btn-edit-day').addEventListener('click', () => {
      openEditModal(day.id);
    });

    card.querySelector('.btn-unassign-active').addEventListener('click', () => {
      unassignDay(day.id);
    });

    if (day.questions && day.questions.length > 0) {
      const qBtn = card.querySelector('.btn-toggle-questions');
      const qList = card.querySelector('.card-questions-list');
      qBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isCollapsed = qList.style.display === 'none';
        if (isCollapsed) {
          qList.style.display = 'block';
          qBtn.querySelector('.chevron-icon').style.transform = 'rotate(180deg)';
        } else {
          qList.style.display = 'none';
          qBtn.querySelector('.chevron-icon').style.transform = 'rotate(0deg)';
        }
      });
    }

    gridContainer.appendChild(card);
  });
}

// TABLE VIEW RENDER
function renderTableView(data) {
  const tbody = document.getElementById('planner-table-body');
  tbody.innerHTML = '';

  data.forEach(day => {
    let pillClass = 'other';
    if (day.technology.toLowerCase() === 'javascript') pillClass = 'js';
    else if (day.technology.toLowerCase() === 'react.js') pillClass = 'react';
    else if (day.technology.toLowerCase() === 'redux') pillClass = 'redux';

    const tagsHTML = day.tags.map(tagName => {
      const tagObj = plannerState.tags.find(t => t.name === tagName);
      const color = tagObj ? tagObj.color : '#6b7280';
      const textColor = getContrastColor(color);
      return `<span class="tag-pill" style="background-color: ${color}; color: ${textColor}; margin: 2px;">${escapeHTML(tagName)}</span>`;
    }).join('');

    const splitsHTML = day.splits.map(split => `
      <div class="table-split-row">
        <span class="table-split-hr">${split.hours}h</span>
        <span class="table-split-text">${escapeHTML(split.desc)}</span>
      </div>
    `).join('');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="table-day-num">${escapeHTML(day.dayNum)}</td>
      <td>${escapeHTML(day.date)}</td>
      <td>${escapeHTML(day.dayOfWeek)}</td>
      <td><span class="tech-pill ${pillClass}">${escapeHTML(day.technology)}</span></td>
      <td class="table-topic-cell">
        ${escapeHTML(day.topic)}
        ${day.questions && day.questions.length > 0 ? `
          <div class="table-questions-container" style="margin-top: 8px;">
            <button type="button" class="btn-toggle-table-questions" style="background:none; border:none; color:var(--primary-color); font-size: 11px; font-weight: 600; cursor:pointer; padding:0; display:inline-flex; align-items:center; gap:4px; outline:none;">
              Practice Questions (${day.questions.length})
              <svg class="chevron-icon" viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" style="transition: transform var(--transition-fast) ease-in-out;"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <ol class="table-questions-list" style="display: none; padding-left: 16px; margin-top: 6px; font-size: 11px; color: var(--text-muted); line-height: 1.4; text-align: left;">
              ${day.questions.map(q => `<li style="margin-bottom: 4px;">${escapeHTML(q)}</li>`).join('')}
            </ol>
          </div>
        ` : ''}
      </td>
      <td>
        <div class="table-split-list">${splitsHTML}</div>
      </td>
      <td><div style="display: flex; flex-wrap: wrap;">${tagsHTML}</div></td>
      <td><span class="status-badge ${day.status}">${day.status.replace('-', ' ')}</span></td>
      <td>
        <div style="display: flex; gap: 6px; justify-content: center;">
          <button class="btn btn-secondary btn-icon btn-small btn-edit-table" data-id="${day.id}" title="Edit Plan">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg>
          </button>
          <button class="btn btn-danger btn-icon btn-small btn-unassign-table" data-id="${day.id}" title="Move to Backlog">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </td>
    `;

    tr.querySelector('.btn-edit-table').addEventListener('click', () => {
      openEditModal(day.id);
    });

    tr.querySelector('.btn-unassign-table').addEventListener('click', () => {
      unassignDay(day.id);
    });

    if (day.questions && day.questions.length > 0) {
      const qBtn = tr.querySelector('.btn-toggle-table-questions');
      const qList = tr.querySelector('.table-questions-list');
      qBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isCollapsed = qList.style.display === 'none';
        if (isCollapsed) {
          qList.style.display = 'block';
          qBtn.querySelector('.chevron-icon').style.transform = 'rotate(180deg)';
        } else {
          qList.style.display = 'none';
          qBtn.querySelector('.chevron-icon').style.transform = 'rotate(0deg)';
        }
      });
    }

    tbody.appendChild(tr);
  });
}

// RENDER UNASSIGNED BACKLOG SECTION
function renderUnassignedBacklog() {
  const unassignedGrid = document.getElementById('unassigned-grid');
  const unassignedDays = plannerState.days.filter(d => !d.assigned);
  
  document.getElementById('unassigned-count').innerText = unassignedDays.length;

  if (unassignedDays.length === 0) {
    unassignedGrid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 24px; text-align: center; color: var(--text-muted); font-size: 14px;">
        All topics are currently assigned to the active planner schedule.
      </div>
    `;
    return;
  }

  unassignedGrid.innerHTML = '';
  unassignedDays.forEach(day => {
    let techClass = 'tech-other';
    let pillClass = 'other';
    if (day.technology.toLowerCase() === 'javascript') {
      techClass = 'tech-js';
      pillClass = 'js';
    } else if (day.technology.toLowerCase() === 'react.js') {
      techClass = 'tech-react';
      pillClass = 'react';
    } else if (day.technology.toLowerCase() === 'redux') {
      techClass = 'tech-redux';
      pillClass = 'redux';
    }

    const tagsHTML = day.tags.map(tagName => {
      const tagObj = plannerState.tags.find(t => t.name === tagName);
      const color = tagObj ? tagObj.color : '#6b7280';
      const textColor = getContrastColor(color);
      return `<span class="tag-pill" style="background-color: ${color}; color: ${textColor}">${escapeHTML(tagName)}</span>`;
    }).join('');

    const splitsHTML = day.splits.map(split => `
      <div class="split-segment">
        <span class="split-hour-tag">${split.hours}h</span>
        <span class="split-desc">${escapeHTML(split.desc)}</span>
      </div>
    `).join('');

    const card = document.createElement('div');
    card.className = `study-card unassigned ${techClass}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="day-badge">${escapeHTML(day.originalDayNum)} <span style="font-size: 11px; font-weight: 500; color: var(--text-muted);">(Original)</span></span>
        <span class="tech-pill ${pillClass}">${escapeHTML(day.technology)}</span>
      </div>
      <h4 class="card-title" style="min-height: auto;">${escapeHTML(day.topic)}</h4>
      <div class="card-splits" style="font-size: 12px;">
        ${splitsHTML}
      </div>
      <div class="card-tags">
        ${tagsHTML}
      </div>
      <div class="card-footer" style="border-top: 1px solid var(--border-color); padding-top: 10px; margin-top: 10px;">
        <button class="btn btn-primary btn-small btn-assign-backlog" style="width: 100%;" data-id="${day.id}">
          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Assign to Planner
        </button>
      </div>
    `;

    card.querySelector('.btn-assign-backlog').addEventListener('click', () => {
      assignDay(day.id);
    });

    unassignedGrid.appendChild(card);
  });
}

// MOVE DAY TO BACKLOG
function unassignDay(dayId) {
  const day = plannerState.days.find(d => d.id === dayId);
  if (day) {
    day.assigned = false;
    syncDayNumbers();
    saveStateToLocalStorage();
    populateFilterDropdowns();
    renderAnalytics();
    renderPlannerList();
    renderUnassignedBacklog();
  }
}

// RESTORE DAY TO SCHEDULE
function assignDay(dayId) {
  const day = plannerState.days.find(d => d.id === dayId);
  if (day) {
    day.assigned = true;
    syncDayNumbers();
    saveStateToLocalStorage();
    populateFilterDropdowns();
    renderAnalytics();
    renderPlannerList();
    renderUnassignedBacklog();
  }
}

// SETUP VIEW SWITCH TOGGLES
function updateViewToggleState() {
  const gridBtn = document.getElementById('view-grid');
  const tableBtn = document.getElementById('view-table');

  if (plannerState.viewMode === 'grid') {
    gridBtn.classList.add('active');
    tableBtn.classList.remove('active');
  } else {
    tableBtn.classList.add('active');
    gridBtn.classList.remove('active');
  }
}

// SYSTEM THEME TOGGLE STYLING
function updateThemeIcons(theme) {
  const sunIcon = document.querySelector('#theme-toggle .sun-icon');
  const moonIcon = document.querySelector('#theme-toggle .moon-icon');

  if (theme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

// EDIT MODAL: OPEN & POPULATE DATA
let currentEditingDayTags = [];

function openEditModal(dayId) {
  const day = plannerState.days.find(d => d.id === dayId);
  if (!day) return;

  document.getElementById('edit-day-id').value = day.id;
  document.getElementById('modal-title').innerText = `Edit Plan: ${day.dayNum}`;
  document.getElementById('edit-date').value = day.date;
  document.getElementById('edit-dayofweek').value = day.dayOfWeek;
  document.getElementById('edit-technology').value = day.technology;
  document.getElementById('edit-topic').value = day.topic;

  // Set status pill selection
  document.getElementById(`status-${day.status.replace('-', '')}`).checked = true;

  // Set temporary editing tags
  currentEditingDayTags = [...day.tags];
  renderModalTagsList();

  // Populate splits
  const splitContainer = document.getElementById('split-items-container');
  splitContainer.innerHTML = '';
  day.splits.forEach((split, index) => {
    addSplitRowInput(split.hours, split.desc, index);
  });
  updateSplitHoursSum();

  // Show modal
  document.getElementById('edit-modal').style.display = 'flex';
}

function addSplitRowInput(hours = 0, desc = '', index = null) {
  const container = document.getElementById('split-items-container');
  const row = document.createElement('div');
  row.className = 'split-item-row';
  row.innerHTML = `
    <input type="text" class="form-group split-item-hour-input" value="${hours}" placeholder="Hours" required>
    <input type="text" class="form-group split-item-desc-input" value="${escapeHTML(desc)}" placeholder="Segment details/objective..." required>
    <button type="button" class="btn-remove-split" title="Delete segment">
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
    </button>
  `;

  // Attach listener to calculate hour totals live
  row.querySelector('.split-item-hour-input').addEventListener('input', updateSplitHoursSum);
  
  // Remove button
  row.querySelector('.btn-remove-split').addEventListener('click', () => {
    row.remove();
    updateSplitHoursSum();
  });

  container.appendChild(row);
}

function updateSplitHoursSum() {
  const inputs = document.querySelectorAll('.split-item-hour-input');
  let sum = 0;
  inputs.forEach(input => {
    const val = parseFloat(input.value) || 0;
    sum += val;
  });

  const sumDisplay = document.getElementById('split-hours-sum');
  sumDisplay.innerText = `${Math.round(sum * 100) / 100}h`;

  if (Math.abs(sum - 8) < 0.01) {
    sumDisplay.className = 'checksum-value valid';
  } else {
    sumDisplay.className = 'checksum-value invalid';
  }
}

// RENDER TAGS CURRENTLY SELECTED ON EDITING CARD
function renderModalTagsList() {
  const list = document.getElementById('modal-tags-list');
  list.innerHTML = '';

  if (currentEditingDayTags.length === 0) {
    list.innerHTML = '<span style="color: var(--text-muted); font-size: 13px;">No tags applied.</span>';
    return;
  }

  currentEditingDayTags.forEach(tagName => {
    const tagObj = plannerState.tags.find(t => t.name === tagName);
    const color = tagObj ? tagObj.color : '#6b7280';
    const textColor = getContrastColor(color);

    const pill = document.createElement('span');
    pill.className = 'tag-pill tag-pill-editable';
    pill.style.cssText = `background-color: ${color}; color: ${textColor};`;
    pill.innerHTML = `
      ${escapeHTML(tagName)}
      <button type="button" class="tag-remove-btn" data-tag="${escapeHTML(tagName)}">
        <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;

    pill.querySelector('.tag-remove-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      currentEditingDayTags = currentEditingDayTags.filter(t => t !== tagName);
      renderModalTagsList();
    });

    list.appendChild(pill);
  });
}

// RENDER THE "+ ADD TAG" DROPDOWN SELECTOR IN EDIT MODAL
function renderAddTagDropdown() {
  const dropdown = document.getElementById('tag-selector-dropdown');
  dropdown.innerHTML = '';

  // Get tags that aren't already added to the day
  const availableTags = plannerState.tags.filter(t => !currentEditingDayTags.includes(t.name));

  if (availableTags.length === 0) {
    dropdown.innerHTML = '<div style="font-size: 11px; padding: 8px; color: var(--text-muted);">All tags applied.</div>';
    return;
  }

  availableTags.forEach(tag => {
    const item = document.createElement('div');
    item.className = 'tag-option-item';
    item.innerHTML = `
      <span class="tag-option-color" style="background-color: ${tag.color}"></span>
      <span>${escapeHTML(tag.name)}</span>
    `;

    item.addEventListener('click', () => {
      currentEditingDayTags.push(tag.name);
      renderModalTagsList();
      dropdown.style.display = 'none'; // Close dropdown after selection
    });

    dropdown.appendChild(item);
  });
}

// GLOBAL TAG MANAGER: OPEN & RENDER TAGS
function openTagManagerModal() {
  renderTagsManagerList();
  document.getElementById('tags-manager-modal').style.display = 'flex';
}

function renderTagsManagerList() {
  const list = document.getElementById('tags-manager-list');
  list.innerHTML = '';

  if (plannerState.tags.length === 0) {
    list.innerHTML = '<span style="color: var(--text-muted); font-size: 13px;">No tags created.</span>';
    return;
  }

  plannerState.tags.forEach(tag => {
    const textColor = getContrastColor(tag.color);
    const item = document.createElement('div');
    item.className = 'tag-manager-item';
    item.style.cssText = `background-color: ${tag.color}; color: ${textColor};`;
    item.innerHTML = `
      <span>${escapeHTML(tag.name)}</span>
      <button class="tag-manager-delete" data-tag="${escapeHTML(tag.name)}" title="Delete tag globally">
        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;

    item.querySelector('.tag-manager-delete').addEventListener('click', () => {
      if (confirm(`Are you sure you want to delete the tag "${tag.name}"? It will be removed from all study plans.`)) {
        deleteTagGlobally(tag.name);
      }
    });

    list.appendChild(item);
  });
}

function deleteTagGlobally(tagName) {
  // Remove from global tags list
  plannerState.tags = plannerState.tags.filter(t => t.name !== tagName);
  
  // Remove from all days
  plannerState.days.forEach(day => {
    day.tags = day.tags.filter(t => t !== tagName);
  });

  saveStateToLocalStorage();
  renderTagsManagerList();
  populateFilterDropdowns();
  renderPlannerList();
}

// SETUP ALL LISTENERS
function setupEventListeners() {
  // View mode controls
  document.getElementById('view-grid').addEventListener('click', () => {
    plannerState.viewMode = 'grid';
    localStorage.setItem('chronos_view_mode', 'grid');
    updateViewToggleState();
    renderPlannerList();
  });

  document.getElementById('view-table').addEventListener('click', () => {
    plannerState.viewMode = 'table';
    localStorage.setItem('chronos_view_mode', 'table');
    updateViewToggleState();
    renderPlannerList();
  });

  // Search input
  document.getElementById('search-input').addEventListener('input', (e) => {
    plannerState.filters.search = e.target.value;
    renderPlannerList();
  });

  // Filter Selects
  document.getElementById('filter-tech').addEventListener('change', (e) => {
    plannerState.filters.tech = e.target.value;
    renderPlannerList();
  });

  document.getElementById('filter-status').addEventListener('change', (e) => {
    plannerState.filters.status = e.target.value;
    renderPlannerList();
  });

  document.getElementById('filter-tag').addEventListener('change', (e) => {
    plannerState.filters.tag = e.target.value;
    renderPlannerList();
  });

  // Manage tags button
  document.getElementById('btn-manage-tags').addEventListener('click', openTagManagerModal);
  document.getElementById('tag-modal-close').addEventListener('click', () => {
    document.getElementById('tags-manager-modal').style.display = 'none';
  });
  document.getElementById('btn-close-tag-manager').addEventListener('click', () => {
    document.getElementById('tags-manager-modal').style.display = 'none';
  });

  // Collapse/Expand backlog button
  const btnToggleUnassigned = document.getElementById('btn-toggle-unassigned');
  const unassignedGridContent = document.getElementById('unassigned-grid');
  
  if (btnToggleUnassigned && unassignedGridContent) {
    btnToggleUnassigned.addEventListener('click', () => {
      const isCollapsed = unassignedGridContent.classList.contains('collapsed');
      if (isCollapsed) {
        unassignedGridContent.classList.remove('collapsed');
        btnToggleUnassigned.innerText = 'Collapse';
      } else {
        unassignedGridContent.classList.add('collapsed');
        btnToggleUnassigned.innerText = 'Expand';
      }
    });
  }

  // Create Tag Form
  document.getElementById('btn-create-tag').addEventListener('click', () => {
    const nameInput = document.getElementById('new-tag-name');
    const colorInput = document.getElementById('new-tag-color');
    const name = nameInput.value.trim();
    const color = colorInput.value;

    if (!name) {
      alert('Please enter a tag name.');
      return;
    }

    if (plannerState.tags.some(t => t.name.toLowerCase() === name.toLowerCase())) {
      alert('A tag with that name already exists.');
      return;
    }

    plannerState.tags.push({ name, color });
    saveStateToLocalStorage();
    nameInput.value = '';
    
    renderTagsManagerList();
    populateFilterDropdowns();
    renderPlannerList();
  });

  // Edit Modal controls
  document.getElementById('edit-modal-close').addEventListener('click', () => {
    document.getElementById('edit-modal').style.display = 'none';
  });
  document.getElementById('edit-modal-cancel').addEventListener('click', () => {
    document.getElementById('edit-modal').style.display = 'none';
  });

  // Edit Form Submit
  document.getElementById('edit-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const dayId = document.getElementById('edit-day-id').value;
    const day = plannerState.days.find(d => d.id === dayId);
    if (!day) return;

    // Fetch values
    day.date = document.getElementById('edit-date').value.trim();
    day.dayOfWeek = document.getElementById('edit-dayofweek').value.trim();
    day.technology = document.getElementById('edit-technology').value.trim();
    day.topic = document.getElementById('edit-topic').value.trim();
    
    // Status
    const statusVal = document.querySelector('input[name="edit-status"]:checked').value;
    day.status = statusVal;

    // Tags
    day.tags = [...currentEditingDayTags];

    // Hour splits mapping
    const splitRows = document.querySelectorAll('.split-item-row');
    const newSplits = [];
    splitRows.forEach(row => {
      const hr = parseFloat(row.querySelector('.split-item-hour-input').value) || 0;
      const desc = row.querySelector('.split-item-desc-input').value.trim();
      newSplits.push({ hours: hr, desc: desc });
    });
    day.splits = newSplits;

    saveStateToLocalStorage();
    document.getElementById('edit-modal').style.display = 'none';

    // Rerender dashboard & lists
    populateFilterDropdowns();
    renderAnalytics();
    renderPlannerList();
  });

  // Add Segment button in edit form
  document.getElementById('btn-add-split-item').addEventListener('click', () => {
    addSplitRowInput(0, '');
    updateSplitHoursSum();
  });

  // Add Tag Dropdown trigger
  const addTagDropdownBtn = document.getElementById('btn-add-tag-dropdown');
  const addTagDropdownMenu = document.getElementById('tag-selector-dropdown');

  addTagDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isShowing = addTagDropdownMenu.style.display === 'flex';
    if (isShowing) {
      addTagDropdownMenu.style.display = 'none';
    } else {
      renderAddTagDropdown();
      addTagDropdownMenu.style.display = 'flex';
    }
  });

  // Close tag dropdown clicking elsewhere
  document.addEventListener('click', (e) => {
    if (!addTagDropdownBtn.contains(e.target) && !addTagDropdownMenu.contains(e.target)) {
      addTagDropdownMenu.style.display = 'none';
    }
  });

  // Export CSV
  document.getElementById('btn-export').addEventListener('click', exportCSV);

  // Import CSV Input
  document.getElementById('csv-import').addEventListener('change', importCSV);

  // Reset button
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all modifications? This will restore the original study plan and remove custom tags.')) {
      localStorage.removeItem('chronos_study_planner_state');
      initApp();
    }
  });

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('chronos_theme', nextTheme);
    updateThemeIcons(nextTheme);
  });
}

// CSV EXPORT GENERATOR (ACTIVE DAYS ONLY)
function exportCSV() {
  const headers = ['Day', 'Date', 'Day of Week', 'Technology', 'Topic / Learning Objective', '8-Hour Daily Breakdown Split'];
  
  const activeDays = plannerState.days.filter(d => d.assigned);
  
  const rows = activeDays.map(day => {
    // Map splits back to vertical bar string
    const splitString = day.splits.map(s => `${s.hours}h: ${s.desc}`).join(' | ');
    
    return [
      day.dayNum,
      day.date,
      day.dayOfWeek,
      day.technology,
      day.topic,
      splitString
    ];
  });

  // Construct CSV string
  let csvContent = headers.map(h => escapeCSVField(h)).join(',') + '\n';
  rows.forEach(row => {
    csvContent += row.map(cell => escapeCSVField(cell)).join(',') + '\n';
  });

  // Trigger download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `active_study_planner_${new Date().toISOString().slice(0,10)}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function escapeCSVField(val) {
  if (val === null || val === undefined) return '';
  let str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = str.replace(/"/g, '""');
    return `"${str}"`;
  }
  return str;
}

// CSV IMPORT PARSING
function importCSV(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    try {
      const parsedDays = parseCSV(text);
      if (parsedDays.length === 0) {
        alert('Invalid CSV Format or Empty CSV file.');
        return;
      }

      if (confirm(`Loaded ${parsedDays.length} days from CSV. Overwrite current planner data?`)) {
        plannerState.days = parsedDays;
        
        // If it looks like our original 30-day template, do the standard 22-day partition
        if (parsedDays.length === 30 && parsedDays[0].topic.includes('Variables')) {
          const activeIndices = [3, 6, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
          plannerState.days.forEach((day, index) => {
            day.assigned = activeIndices.includes(index);
          });
        }
        
        syncDayNumbers();
        autoTagDays();
        saveStateToLocalStorage();
        populateFilterDropdowns();
        renderAnalytics();
        renderPlannerList();
        renderUnassignedBacklog();
        alert('CSV Imported successfully!');
      }
    } catch (err) {
      console.error('Import Failed', err);
      alert('Error parsing CSV file: ' + err.message);
    }
  };
  reader.readAsText(file);
  
  e.target.value = '';
}

// HELPERS
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getContrastColor(hexColor) {
  let hex = hexColor.replace('#', '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#1f2937' : '#ffffff';
}
