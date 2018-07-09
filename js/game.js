import cc from 'cc';
import StartSC from 'scenes/StartSC'
import res from 'resources';

export const resources = Object.keys(res).map((n) => res[n]);

export const Scene = StartSC;
