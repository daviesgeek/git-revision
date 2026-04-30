type GitRevisionTypes =
  'short' |
  'long' |
  'hash' |
  'tag' |
  'branch' |
  'describeTag'

declare function gitRevision(type: GitRevisionTypes): string
declare function gitRevision(type: GitRevisionTypes, onComplete: (hash: string) => void): void

export = gitRevision