#!/usr/bin/env bash
#
# download-assets.sh
# Pulls every w3.hub media asset off Framer's CDN into ./public so the rebuild
# has no runtime dependency on framerusercontent.com.
#
# Usage:
#   chmod +x download-assets.sh
#   ./download-assets.sh            # downloads into ./public
#   ./download-assets.sh ./public   # or pass a target public dir explicitly
#
# Requires: bash + curl (preinstalled on macOS/Linux). Re-running is safe — it
# skips files that already exist (delete a file to force re-download).
#
# After running, a few assets are given friendly names:
#   videos/hero.mp4      (hero background video)
#   images/logo-mark.png (favicon / logo mark)
#   images/og-image.png  (social share image)
# All other images keep their original Framer hash filenames — rename them to
# something descriptive as you wire each one into a component.

set -euo pipefail

PUBLIC_DIR="${1:-./public}"
mkdir -p "$PUBLIC_DIR/images" "$PUBLIC_DIR/videos"

# "SOURCE_URL|DEST_PATH_RELATIVE_TO_PUBLIC"
ASSETS=(
  "https://framerusercontent.com/assets/jS0ELwZAoL5YYyb4O0nucP1T3KA.mp4|videos/hero.mp4"
  "https://framerusercontent.com/images/10DDGneymTgn8oNBYjdEspoUnY.jpg|images/10DDGneymTgn8oNBYjdEspoUnY.jpg"
  "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg|images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
  "https://framerusercontent.com/images/4D0foGL53oiXHlWejVG8iWsMs.png|images/4D0foGL53oiXHlWejVG8iWsMs.png"
  "https://framerusercontent.com/images/5gABx7UPH7L7H9PpMq4jXgEKsE.jpg|images/5gABx7UPH7L7H9PpMq4jXgEKsE.jpg"
  "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg|images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
  "https://framerusercontent.com/images/7sVgB1rf4bm2W5Bh27fn51JMY.png|images/7sVgB1rf4bm2W5Bh27fn51JMY.png"
  "https://framerusercontent.com/images/7trINXt5xoZZuyyZ9LxU2fuOFMc.png|images/7trINXt5xoZZuyyZ9LxU2fuOFMc.png"
  "https://framerusercontent.com/images/8Ker8a1FRuhIEqC0rFGyb2MkQl0.jpg|images/8Ker8a1FRuhIEqC0rFGyb2MkQl0.jpg"
  "https://framerusercontent.com/images/9Mxghj1zWlS0fA8Vy0gI16E3eQ.jpg|images/9Mxghj1zWlS0fA8Vy0gI16E3eQ.jpg"
  "https://framerusercontent.com/images/Al2iscBPiU5j2AovWfwy2MS77L4.png|images/Al2iscBPiU5j2AovWfwy2MS77L4.png"
  "https://framerusercontent.com/images/BMS2pINPFKYTNBj1tj7iogkkI.jpg|images/BMS2pINPFKYTNBj1tj7iogkkI.jpg"
  "https://framerusercontent.com/images/D6nfqblWivQH1FQ0DUPYKJgI.png|images/D6nfqblWivQH1FQ0DUPYKJgI.png"
  "https://framerusercontent.com/images/DkDgIWHmUyFximfhIekSEwo8w.png|images/DkDgIWHmUyFximfhIekSEwo8w.png"
  "https://framerusercontent.com/images/FmahWidoF9muSGRBjLqXWqEaE.png|images/FmahWidoF9muSGRBjLqXWqEaE.png"
  "https://framerusercontent.com/images/GC3dbv0bQoQI5cZ7Afsvmc0vlM.png|images/GC3dbv0bQoQI5cZ7Afsvmc0vlM.png"
  "https://framerusercontent.com/images/GjHiSp0xprENq98tKiwGxrrfebs.png|images/GjHiSp0xprENq98tKiwGxrrfebs.png"
  "https://framerusercontent.com/images/H69gPIdjmzE6nldkKuVvXC6y24.png|images/H69gPIdjmzE6nldkKuVvXC6y24.png"
  "https://framerusercontent.com/images/HGMVwXEUFVz0lhUshDcMQTTdME.png|images/HGMVwXEUFVz0lhUshDcMQTTdME.png"
  "https://framerusercontent.com/images/Ic9uuri1WjHCFylIornEa6au4.png|images/Ic9uuri1WjHCFylIornEa6au4.png"
  "https://framerusercontent.com/images/JALlzNO0QwsmOaHL6qWDlv6twbA.jpg|images/JALlzNO0QwsmOaHL6qWDlv6twbA.jpg"
  "https://framerusercontent.com/images/JKd6LZFnRvkrUZQODPErdQjqhY.png|images/JKd6LZFnRvkrUZQODPErdQjqhY.png"
  "https://framerusercontent.com/images/PuI3rd38V8wpvaZMkehyRDg3o.png|images/PuI3rd38V8wpvaZMkehyRDg3o.png"
  "https://framerusercontent.com/images/SCXQduGH5Kw9mkwne6EnL0r6Y.png|images/og-image.png"
  "https://framerusercontent.com/images/SwfMblFTrwMRdupmI9cQUtEeLs.png|images/SwfMblFTrwMRdupmI9cQUtEeLs.png"
  "https://framerusercontent.com/images/TbMrX0L3wrZjDNA9AIaln4AeW4s.png|images/logo-mark.png"
  "https://framerusercontent.com/images/ThV0KoK1V9k0D4UqGuf7KXz6kTY.png|images/ThV0KoK1V9k0D4UqGuf7KXz6kTY.png"
  "https://framerusercontent.com/images/U3hL1B5bTvMeUcJpHhiUeDIt6g.png|images/U3hL1B5bTvMeUcJpHhiUeDIt6g.png"
  "https://framerusercontent.com/images/VaEkvzHMO4lj1llh1jQtUphkipg.png|images/VaEkvzHMO4lj1llh1jQtUphkipg.png"
  "https://framerusercontent.com/images/XSGYHp6LFiBd77Q2AXBWL05XB0.jpg|images/XSGYHp6LFiBd77Q2AXBWL05XB0.jpg"
  "https://framerusercontent.com/images/XwJ4K0xDD34gRRY7jdcHjpNvwns.png|images/XwJ4K0xDD34gRRY7jdcHjpNvwns.png"
  "https://framerusercontent.com/images/ZIrm6rBeUVU11g4IYccgeKxQbM.jpg|images/ZIrm6rBeUVU11g4IYccgeKxQbM.jpg"
  "https://framerusercontent.com/images/a7NKBJLRjWtU9cJavEWbiFR4Cc.png|images/a7NKBJLRjWtU9cJavEWbiFR4Cc.png"
  "https://framerusercontent.com/images/bfQYajgAUFGPNmzTcMlrbH6JIU.png|images/bfQYajgAUFGPNmzTcMlrbH6JIU.png"
  "https://framerusercontent.com/images/cut7WCvJk5qyUo3XRHQH89nTtpc.png|images/cut7WCvJk5qyUo3XRHQH89nTtpc.png"
  "https://framerusercontent.com/images/dq9cm3tB7WN0Bwzccv1s2RGGF8.jpg|images/dq9cm3tB7WN0Bwzccv1s2RGGF8.jpg"
  "https://framerusercontent.com/images/ecneLlb9Xo6pASOuPTO3OsXhofY.png|images/ecneLlb9Xo6pASOuPTO3OsXhofY.png"
  "https://framerusercontent.com/images/gC8D3R1roI6kPKz6W0D7bHPvEmM.png|images/gC8D3R1roI6kPKz6W0D7bHPvEmM.png"
  "https://framerusercontent.com/images/hi0G09lb9Y4YJ0O9Qla3dmJs8.png|images/hi0G09lb9Y4YJ0O9Qla3dmJs8.png"
  "https://framerusercontent.com/images/iUu286Ut0FdRrc1Ke5sjZhEm4.png|images/iUu286Ut0FdRrc1Ke5sjZhEm4.png"
  "https://framerusercontent.com/images/it2gn1Z9ccI710MVkT5TaoTjtU.png|images/it2gn1Z9ccI710MVkT5TaoTjtU.png"
  "https://framerusercontent.com/images/keGLB99znM3RkxuGBNNtvyIYzYY.png|images/keGLB99znM3RkxuGBNNtvyIYzYY.png"
  "https://framerusercontent.com/images/m0ZNZsXT1VHqNLq8H8XAIfNhui8.png|images/m0ZNZsXT1VHqNLq8H8XAIfNhui8.png"
  "https://framerusercontent.com/images/mKkHg4zjWie0a2gErYvJ0G9nk.png|images/mKkHg4zjWie0a2gErYvJ0G9nk.png"
  "https://framerusercontent.com/images/mxGWaiNGWW2ZR7hGhZNZQBPma8.png|images/mxGWaiNGWW2ZR7hGhZNZQBPma8.png"
  "https://framerusercontent.com/images/oKRpaw8gxSavwNNYDHdJN4mUCKs.png|images/oKRpaw8gxSavwNNYDHdJN4mUCKs.png"
  "https://framerusercontent.com/images/oWLRwFAsMARSZ6yrh1uXKNgIg.png|images/oWLRwFAsMARSZ6yrh1uXKNgIg.png"
  "https://framerusercontent.com/images/pMLMnOoR2Z1rmW9171YJnqmJU.jpg|images/pMLMnOoR2Z1rmW9171YJnqmJU.jpg"
  "https://framerusercontent.com/images/rnEEO3rHHo5G8CliwGuivikKdw.jpg|images/rnEEO3rHHo5G8CliwGuivikKdw.jpg"
  "https://framerusercontent.com/images/skItqYbVgaMCembjkYHB10LoXG0.png|images/skItqYbVgaMCembjkYHB10LoXG0.png"
  "https://framerusercontent.com/images/w1zrA74nilSEYweqdYca7DhSi8.svg|images/w1zrA74nilSEYweqdYca7DhSi8.svg"
  "https://framerusercontent.com/images/wgestw1MeQtJzy04RZQ5ziRfVmg.png|images/wgestw1MeQtJzy04RZQ5ziRfVmg.png"
  "https://framerusercontent.com/images/wpWGF8xbSZMgswn2MRKXSx5TRTQ.jpg|images/wpWGF8xbSZMgswn2MRKXSx5TRTQ.jpg"
  "https://framerusercontent.com/images/xIQlorLgGAT9BBoK1YZBYWN9A.png|images/xIQlorLgGAT9BBoK1YZBYWN9A.png"
  "https://framerusercontent.com/images/yivG1RPjQ9i4s5aldStDzSG5E.png|images/yivG1RPjQ9i4s5aldStDzSG5E.png"
)

total=${#ASSETS[@]}
i=0
ok=0
skip=0
fail=0
failed_urls=()

echo "Downloading $total assets into $PUBLIC_DIR ..."
echo

for entry in "${ASSETS[@]}"; do
  i=$((i + 1))
  url="${entry%%|*}"
  dest="${entry##*|}"
  out="$PUBLIC_DIR/$dest"

  printf "[%2d/%2d] %s\n" "$i" "$total" "$dest"

  if [[ -f "$out" ]]; then
    echo "         ↳ already exists, skipping"
    skip=$((skip + 1))
    continue
  fi

  mkdir -p "$(dirname "$out")"

  # -f fail on HTTP errors, -L follow redirects, -s silent, -S show errors, retry on flaky network
  if curl -fLsS --retry 3 --retry-delay 2 -o "$out" "$url"; then
    ok=$((ok + 1))
  else
    echo "         ↳ FAILED"
    rm -f "$out"
    fail=$((fail + 1))
    failed_urls+=("$url")
  fi
done

echo
echo "Done. Downloaded: $ok | Skipped (existing): $skip | Failed: $fail"

if [[ $fail -gt 0 ]]; then
  echo
  echo "The following URLs failed — grab them from the live site's Network tab instead:"
  for u in "${failed_urls[@]}"; do echo "  - $u"; done
  exit 1
fi
