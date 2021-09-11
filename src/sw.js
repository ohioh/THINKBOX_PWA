import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';

//This sets up the network-first fallback behaviour for offline users.
setupRouting();

//The getFiles() function returns an Array of URLs generated at build time that should be cached for offline use.
const urlsToCache = getFiles();
setupPrecaching(urlsToCache);