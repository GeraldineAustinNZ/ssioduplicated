import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const checklist = [
  {
    phase: 'Core Auth Flow',
    checks: [
      ['stores/authStore.ts', 'supabase.auth.getSession'],
      ['stores/authStore.ts', 'fetchProfile'],
      ['stores/authStore.ts', 'loading'],
      ['stores/authStore.ts', 'signOut'],
    ],
  },
  {
    phase: 'Sign-In Screen',
    checks: [
      ['app/sign-in.tsx', null],
      ['app/sign-in.tsx', 'signIn'],
      ['app/sign-in.tsx', 'error'],
      ['app/sign-in.tsx', 'LoadingSpinner'],
    ],
  },
  {
    phase: 'Routing and Redirects',
    checks: [
      ['app/index.tsx', null],
      ['app/index.tsx', 'Redirect'],
      ['app/index.tsx', 'useAuthStore'],
    ],
  },
  {
    phase: 'UI Components',
    checks: [
      ['components/ui/Input.tsx', null],
      ['components/ui/Button.tsx', null],
      ['components/ui/LoadingSpinner.tsx', null],
      ['components/ui/Input.tsx', 'errorText'],
    ],
  },
  {
    phase: 'Access Control',
    checks: [
      ['app/(tabs)/_layout.tsx', 'Redirect'],
      ['hooks/useAuth.tsx', null], // Should not exist!
      ['stores/authStore.ts', 'profile'],
    ],
  },
  {
    phase: 'Env and Config',
    checks: [
      ['.env', 'EXPO_PUBLIC_SUPABASE_URL'],
      ['.env', 'EXPO_PUBLIC_SUPABASE_ANON_KEY'],
      ['tsconfig.json', '"@/*"'],
    ],
  },
];

type CheckResult = {
  phase: string;
  file: string;
  pattern: string | null;
  result: '✓' | '✗' | '🗑️';
};

const results: CheckResult[] = [];

for (const section of checklist) {
  const { phase, checks } = section;
  for (const [file, pattern] of checks) {
    const filePath = join(process.cwd(), file);
    const exists = existsSync(filePath);

    if (!exists && file.includes('useAuth.tsx')) {
      // This one should NOT exist
      results.push({ phase, file, pattern: '[should not exist]', result: '✓' });
    } else if (!exists) {
      results.push({ phase, file, pattern: pattern ?? '[file check]', result: '✗' });
    } else if (pattern === null) {
      results.push({ phase, file, pattern: '[file check]', result: '✓' });
    } else {
      const contents = readFileSync(filePath, 'utf8');
      const found = contents.includes(pattern);
      results.push({ phase, file, pattern, result: found ? '✓' : '✗' });
    }
  }
}

console.log(`\n🔍 Project Health Check Report\n-------------------------------`);
let currentPhase = '';
for (const { phase, file, pattern, result } of results) {
  if (phase !== currentPhase) {
    console.log(`\n📂 ${phase}`);
    currentPhase = phase;
  }
  console.log(`  ${result} ${file}${pattern ? ` → ${pattern}` : ''}`);
}
console.log(`\n✅ Checklist complete.\n`);
