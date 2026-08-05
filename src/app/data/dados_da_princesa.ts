export type PrincessData = { name?: string };

const STORAGE_KEY = 'dados_da_princesa_v1';

export function loadPrincessData(): PrincessData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as PrincessData;
  } catch (e) {
    console.warn('failed to load princess data', e);
    return {};
  }
}

export function savePrincessData(data: PrincessData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('failed to save princess data', e);
  }
}

export function clearPrincessData() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
}
