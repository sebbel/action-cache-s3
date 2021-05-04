export enum Inputs {
  Bucket = 'bucket',
  Key = 'key',
  Path = 'path',
  SkipSave = 'skip_save'
}

export enum Outputs {
  CacheHit = 'cache-hit'
}

export enum State {
  CacheResult = 'CACHE_RESULT'
}

export const CacheFileName = 'cache.tar.gz'
