const { execSync } = require('child_process');

console.log('🚀 Running pre-deployment build check...');

try {
  console.log('1. Compiling TypeScript...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  console.log('2. Building static Storybook bundle...');
  execSync('npm run build-storybook', { stdio: 'inherit' });

  console.log('✅ Build successful! Ready for Vercel deployment.');
  console.log('Run `vercel --prod` to deploy storybook-static directory.');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
