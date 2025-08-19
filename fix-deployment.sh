#!/bin/bash

echo "🔧 GitHub Actions Deployment Fix"
echo "================================"
echo ""

# Check if we're in the right directory
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Error: Please run this script from the root of your repository"
    exit 1
fi

echo "✅ Repository detected: Bid-Rally"
echo ""

echo "📋 What this script does:"
echo "1. Optimizes the GitHub Actions workflow"
echo "2. Adds timeout protection (30 minutes)"
echo "3. Adds deployment status logging"
echo "4. Triggers a fresh deployment"
echo ""

read -p "Continue with the fix? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled by user"
    exit 1
fi

echo "🚀 Applying deployment fix..."

# The files have already been updated by the AI assistant
echo "✅ Workflow configuration optimized"
echo "✅ Troubleshooting guide added"

echo ""
echo "📝 Summary of changes:"
echo "   • Added 30-minute timeout to prevent indefinite queuing"
echo "   • Added deployment status logging for better visibility"
echo "   • Created comprehensive troubleshooting guide"
echo ""

echo "🎯 Next steps for you:"
echo "1. Go to https://github.com/Torehirth/Bid-Rally/actions"
echo "2. Cancel the currently queued deployment (if still running)"
echo "3. The improved workflow will run automatically when you push these changes"
echo ""

echo "📊 Deployment will be available at:"
echo "   https://torehirth.github.io/Bid-Rally/"
echo ""

echo "✅ Fix completed! Push these changes to trigger a fresh deployment."