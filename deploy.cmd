cd ember/
call ember build --environment=production --output-path=../public/
cd ../
call modulus deploy -p my-site
